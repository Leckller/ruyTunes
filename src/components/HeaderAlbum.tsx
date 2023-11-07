import { useLocation } from 'react-router-dom';
import { HeaderAlbums } from '../pages/Albums/AlbumsStyle';
import { AlbumType } from '../types';

function HeaderAlbum({ album }: { album: AlbumType }) {
  const userLoc = useLocation();
  const user = userLoc.pathname.split('/')[2];
  return (
    <HeaderAlbums Colors={ `#${user.slice(-3)}` }>
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
  );
}

export default HeaderAlbum;
