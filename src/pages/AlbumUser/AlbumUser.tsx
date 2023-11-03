import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Album from '../../components/Album';
import { AlbumUserType, GlobalState, SongType } from '../../types';

function AlbumUser() {
  const user = useSelector((state:GlobalState) => state.UserReducer.users
    .find((e) => e.on));
  const name = useLocation().pathname.split('/')[2];
  if (name === 'curtidos') {
    return (
      <div>
        <Album
          musicas={ { songs: user?.favoriteSongs as SongType[],
            infos: {
              alt: 'curtidos',
              image: '',
              name: 'curtidos',
              path: '/userAlbum/Curtidos',
            } } }
        />
      </div>
    );
  }
  return (
    <div>
      <Album musicas={ user?.albums.find((e:AlbumUserType) => e.infos.name === name) } />
    </div>
  );
}

export default AlbumUser;
