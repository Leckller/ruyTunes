import { useState } from 'react';
import { Link } from 'react-router-dom';
import searchAlbumsAPI from '../../services/albumsApi';
import { MainHome } from '../Home/HomeStyle';
import { AlbumType } from '../../types';

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
    <MainHome>
      <form onSubmit={ handleSubmit }>
        <input
          type="text"
          value={ pesquisa }
          onChange={ (e) => setPesquisa(e.target.value) }
        />
      </form>
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
    </MainHome>
  );
}

export default Search;
