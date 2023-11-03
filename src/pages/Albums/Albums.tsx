/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/jsx-max-depth */
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import getMusics from '../../services/musicsApi';
import { AlbumType, SongType } from '../../types';
import { HeaderAlbums } from './AlbumsStyle';
import RandomColors from '../../services/RandomColor';
import Loading from '../../components/Loading';
import Album from '../../components/Album';

function Albums() {
  const userLoc = useLocation();
  const [musics, setMusics] = useState<SongType[]>([]);
  const [album, setAlbum] = useState<AlbumType>();
  const [loading, setLoading] = useState(false);
  const user = userLoc.pathname.split('/')[2];
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
      <Album musicas={ { songs: musics } } />
    </>
  );
}

export default Albums;
