/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/jsx-max-depth */
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import getMusics from '../../services/musicsApi';
import { AlbumType, SongType } from '../../types';
import { AudioAlbums, HeaderAlbums, MainAlbums } from './AlbumsStyle';
import RandomColors from '../../services/RandomColor';
import Loading from '../../components/Loading';
import ConvMillis from '../../services/ConvMillis';

function Albums() {
  const userLoc = useLocation();
  const [musics, setMusics] = useState<SongType[]>([]);
  const [album, setAlbum] = useState<AlbumType>();
  const [loading, setLoading] = useState(false);
  const user = userLoc.pathname.split('/')[2];
  const navigate = useNavigate();
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
            <button>.</button>
            <button>.</button>
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
              </tr>
            ))}
          </tbody>
        </table>
      </MainAlbums>
    </>
  );
}

export default Albums;
