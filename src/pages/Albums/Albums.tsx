import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import getMusics from '../../services/musicsApi';
import { AlbumType, SongType } from '../../types';
import { HeaderAlbums, MainAlbums } from './AlbumsStyle';

function Albums() {
  const userLoc = useLocation();
  const [musics, setMusics] = useState<SongType[]>([]);
  const [album, setAlbum] = useState<AlbumType>();
  const user = userLoc.pathname.split('/')[2];
  const navigate = useNavigate();
  useEffect(() => {
    const effect = async () => {
      const response = await getMusics(user);
      setAlbum(response[0]);
      setMusics(response.slice(1) as SongType[]);
    };
    effect();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <HeaderAlbums>
        <nav>
          <div>
            <button onClick={ () => navigate(-1) }>{'<'}</button>
            <button onClick={ () => navigate(+1) }>{'>'}</button>
          </div>
          <div>
            <button>Jam</button>
            <button>Perfil</button>
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
            </span>
          </div>
        </section>
      </HeaderAlbums>
      <MainAlbums>
        <section>
          {musics.length > 0 && musics.map((e) => (
            <article key={ e.trackId }>
              <h3>{e.trackName}</h3>
              <audio data-testid="audio-component" src={ e.previewUrl } controls>
                <track kind="captions" />
                O seu navegador não suporta este elemento
                <code>audio</code>
              </audio>
            </article>
          ))}
        </section>
      </MainAlbums>
    </>
  );
}

export default Albums;
