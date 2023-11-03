import { useDispatch, useSelector } from 'react-redux';
import { AudioAlbums, MainAlbums } from '../pages/Albums/AlbumsStyle';
import ConvMillis from '../services/ConvMillis';
import { AlbumUserType, GlobalState, SongType } from '../types';
import fHeart from '../assets/silhueta-de-formato-simples-de-coracao.png';
import heart from '../assets/contorno-em-forma-de-coracao.png';
import { fav } from '../redux/actions/UserActions';

function Album({ musicas }: { musicas: AlbumUserType | undefined }) {
  const dispatch = useDispatch();
  const logins = useSelector((state:GlobalState) => state.UserReducer.users);
  const actLogin = logins[logins.findIndex((ef) => ef.on === true)];
  const handleOnClickFav = (e: SongType) => {
    dispatch(fav(e, actLogin));
  };
  return (
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
          {musicas?.songs && musicas.songs.map((e, i) => (
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
  );
}

export default Album;
