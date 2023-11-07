import { useState } from 'react';
import { Link } from 'react-router-dom';
import searchAlbumsAPI from '../../services/albumsApi';
import { AlbumType } from '../../types';
import { MainSearch } from './SearchStyle';

function Search() {
  const [pesquisa, setPesquisa] = useState('');
  const [search, setSearch] = useState<AlbumType[]>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const effect = async () => {
      const response = await searchAlbumsAPI(pesquisa);
      setSearch(response);
    };
    effect();
  };
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
