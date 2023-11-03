import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Album from '../../components/Album';
import { AlbumUserType, GlobalState, SongType } from '../../types';
import HeaderAlbum from '../../components/HeaderAlbum';
import heart from '../../assets/silhueta-de-formato-simples-de-coracao.png';
import { ColorDiv } from '../Albums/AlbumsStyle';
import RandomColors from '../../services/RandomColor';

function AlbumUser() {
  const user = useSelector((state:GlobalState) => state.UserReducer.users
    .find((e) => e.on));
  const name = useLocation().pathname.split('/')[2];
  if (name === 'curtidos') {
    return (
      <ColorDiv Colors={ RandomColors() }>
        <HeaderAlbum
          album={ {
            artistId: 0,
            artistName: user?.name as string,
            artworkUrl100: heart,
            collectionId: 0,
            collectionName: 'Curtidos',
            collectionPrice: 0,
            primaryGenreName: '',
            releaseDate: '',
            trackCount: user?.favoriteSongs.length as number,
          } }
        />
        <Album
          musicas={ { songs: user?.favoriteSongs as SongType[],
            infos: {
              alt: 'curtidos',
              image: '',
              name: 'curtidos',
              path: '/userAlbum/Curtidos',
            } } }
        />
      </ColorDiv>
    );
  }
  return (
    <div>
      <Album musicas={ user?.albums.find((e:AlbumUserType) => e.infos.name === name) } />
    </div>
  );
}

export default AlbumUser;
