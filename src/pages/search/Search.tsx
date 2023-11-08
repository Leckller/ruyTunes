import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { MainSearch } from './SearchStyle';
import { GlobalState } from '../../types';

function Search() {
  const search = useSelector((state:GlobalState) => state.ApiReducer.actualSearch);
  return (
    <MainSearch>
      <div />
      <section>
        {search && search.map((e) => (
          <article key={ e.collectionId }>
            <Link to={ `/album/${e.collectionId}` }>
              <img src={ e.artworkUrl100 } alt={ e.collectionName } />
              <div>
                <h3>{e.collectionName.split('-')[0].split('(')[0]}</h3>
                <h4>
                  {`${e.releaseDate.split('T')[0].split('-')[0]
                  } * ${e.artistName}`}

                </h4>
              </div>
            </Link>
          </article>
        ))}
      </section>
    </MainSearch>
  );
}

export default Search;
