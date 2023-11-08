import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AlbumType } from '../../types';
import { MainSearch } from './SearchStyle';

function Search() {
  const [search, setSearch] = useState<AlbumType[]>([]);

  return (
    <MainSearch>
      <section>
        {search && search.map((e) => (
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
      </section>
    </MainSearch>
  );
}

export default Search;
