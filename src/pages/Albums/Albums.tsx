import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import getMusics from '../../services/musicsApi';
import { AlbumType, SongType } from '../../types';
import { ColorDiv } from './AlbumsStyle';
import RandomColors from '../../services/RandomColor';
import Loading from '../../components/Loading';
import Album from '../../components/Album';
import HeaderAlbum from '../../components/HeaderAlbum';

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
    <ColorDiv Colors={ RandomColors() }>
      <HeaderAlbum album={ album as AlbumType } />
      <Album
        musicas={ { songs: musics,
          infos: {
            alt: '', image: '', name: '', path: '' } } }
      />
    </ColorDiv>
  );
}

export default Albums;
