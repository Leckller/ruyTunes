import { Link } from 'react-router-dom';
import { SecAlbums } from '../pages/Home/HomeStyle';
import { AlbumType } from '../types';

function Fileiras({ albums, infos }: { albums: AlbumType[], infos: {
  genre: string,
  rota: string
} }) {
  return (
    <SecAlbums>
      <div>
        <h2>{infos.genre}</h2>
        <Link to={ infos.rota }>Ver mais</Link>
      </div>
      {albums && albums.map((e) => (
        <article key={ e.collectionId }>
          <Link to={ `/album/${e.collectionId}` }>
            <img src={ e.artworkUrl100 } alt={ e.collectionName } />
            <h2>{e.collectionName.split('-')[0].split('(')[0]}</h2>
            <h3>
              {`${e.releaseDate.split('T')[0].split('-')[0]
              } * ${e.artistName}`}

            </h3>
          </Link>
        </article>
      ))}
    </SecAlbums>
  );
}

export default Fileiras;
