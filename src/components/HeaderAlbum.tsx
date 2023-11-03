import { HeaderAlbums } from '../pages/Albums/AlbumsStyle';
import RandomColors from '../services/RandomColor';
import { AlbumType } from '../types';

function HeaderAlbum({ album }: { album: AlbumType }) {
  return (
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
  );
}

export default HeaderAlbum;
