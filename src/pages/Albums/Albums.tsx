/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/jsx-max-depth */
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import getMusics from '../../services/musicsApi';
import { AlbumType, GlobalState, SongType } from '../../types';
import { AudioAlbums, HeaderAlbums, MainAlbums } from './AlbumsStyle';
import RandomColors from '../../services/RandomColor';
import Loading from '../../components/Loading';
import ConvMillis from '../../services/ConvMillis';
import { fav } from '../../redux/actions/UserActions';
import fHeart from '../../assets/silhueta-de-formato-simples-de-coracao.png';
import heart from '../../assets/contorno-em-forma-de-coracao.png';
import engrenagem from '../../assets/engrenagem.png';

function Albums() {
  const userLoc = useLocation();
  const [musics, setMusics] = useState<SongType[]>([]);
  const [album, setAlbum] = useState<AlbumType>();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logins = useSelector((state:GlobalState) => state.UserReducer.users);
  const user = userLoc.pathname.split('/')[2];
  const actLogin = logins[logins.findIndex((ef) => ef.on === true)];
  useEffect(() => {
    const effect = async () => {
      setLoading(true);
      const response = await getMusics(user);
      setAlbum(response[0]);
      setMusics(response.slice(1) as SongType[]);
      setLoading(false);
    };
    effect();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleOnClickFav = (e: SongType) => {
    dispatch(fav(e, actLogin));
  };
  if (loading) return <Loading />;
  return (
    <>
      <HeaderAlbums Colors={ RandomColors() }>
        <nav>
          <div>
            <button onClick={ () => navigate(-1) }>{'<'}</button>
            <button onClick={ () => navigate(+1) }>{'>'}</button>
          </div>
          <div>
            <button><img src={ actLogin.image } alt="perfil" /></button>
            <button onClick={ () => navigate('/') }>
              <img src={ engrenagem } alt="configurações" />
            </button>
          </div>
        </nav>
        <section>
          {album && <img src={ album.artworkUrl100 } alt="Capa do Album" />}
          <div>
            {album && <h1>{album.collectionName}</h1>}
            <span>
              {album && <h3>{album.artistName}</h3>}
              {album && <h4>{album.releaseDate.split('-')[0]}</h4>}
              {album && <h5>{`Tracks: ${album.trackCount}`}</h5>}
              {album && <h5>{album.primaryGenreName}</h5>}
            </span>
          </div>
        </section>
      </HeaderAlbums>
      <MainAlbums>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Track</th>
              <th>Time</th>
              <th>Favorite</th>
            </tr>
          </thead>
          <tbody>
            {musics.length > 0 && musics.map((e, i) => (
              <tr key={ e.trackId }>
                <td>{i}</td>
                <td><h3>{e.trackName}</h3></td>
                <td>
                  <AudioAlbums
                    data-testid="audio-component"
                    src={ e.previewUrl }
                    controls
                  >
                    <track kind="captions" />
                    O seu navegador não suporta este elemento
                    <code>audio</code>
                  </AudioAlbums>
                </td>
                <td>{ConvMillis(e.trackTimeMillis)}</td>
                <td>
                  <button
                    onClick={ (eP) => {
                      eP.preventDefault();
                      handleOnClickFav(e);
                    } }
                  >
                    <img
                      src={ actLogin.favoriteSongs
                        .some((eS) => eS.trackName === e.trackName) ? fHeart : heart }
                      alt="botão de curtir"
                    />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </MainAlbums>
    </>
  );
}

export default Albums;
