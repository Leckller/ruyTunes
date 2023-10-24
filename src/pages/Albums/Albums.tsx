import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import getMusics from '../../services/musicsApi';
import { AlbumType, SongType } from '../../types';

function Albums() {
  const userLoc = useLocation();
  const [musics, setMusics] = useState<SongType[]>([]);
  const [album, setAlbum] = useState<AlbumType>();
  const user = userLoc.pathname.split('/')[2];
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
    <main>
      <section>
        {album && <article><h1>{album.collectionName}</h1></article>}
      </section>
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
    </main>
  );
}

export default Albums;
