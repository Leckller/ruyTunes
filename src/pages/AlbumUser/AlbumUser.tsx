import { useSelector } from 'react-redux';
import Album from '../../components/Album';
import { AlbumUserType, GlobalState } from '../../types';

function AlbumUser({ name }: { name: string }) {
  const albums = useSelector((state:GlobalState) => state.UserReducer.users
    .find((e) => e.on))?.albums;
  return (
    <div>
      <Album musicas={ albums?.find((e:AlbumUserType) => e.infos.name === name) } />
    </div>
  );
}

export default AlbumUser;
