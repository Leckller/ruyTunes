import { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import searchAlbumsAPI from '../../services/albumsApi';
import { AlbumType } from '../../types';
import { HeaderHome, MainHome } from './HomeStyle';

function Home() {
  const userLoc = useLocation();
  const user = userLoc.pathname.split('/')[2];
  const [search, setSearch] = useState<AlbumType[]>([]);
  const [pesquisa, setPesquisa] = useState('');
  useEffect(() => {
    const effect = async () => {
      const response = await searchAlbumsAPI('Luisa Sonza');
      setSearch(response);
    };
    effect();
  }, []);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const effect = async () => {
      const response = await searchAlbumsAPI(pesquisa);
      setSearch(response);
    };
    effect();
  };
  return (
    <>
      <HeaderHome>
        <div>
          <h1>
            {
            `
              Bem Vindo ${user}
            `
          }
          </h1>
        </div>
        <div>
          <form onSubmit={ (e) => handleSubmit(e) }>
            <input
              type="text"
              value={ pesquisa }
              onChange={ (e) => setPesquisa(e.target.value) }
            />
            <button type="submit">Pesquisar</button>
          </form>
        </div>
        <nav>
          <Link to="/configuracoes">Cnfg</Link>
          <Link to="/">login</Link>
        </nav>
      </HeaderHome>
      <MainHome>
        {[0].length > 2 && <aside>Playlists</aside>}
        <section>
          {search.length > 0 && search.map((e) => (
            <article key={ e.collectionId }>
              <Link to={ `/album/${e.collectionId}` }>
                <img src={ e.artworkUrl100 } alt={ e.collectionName } />
                <h2>{e.collectionName.split('-')[0].split('(')[0]}</h2>
              </Link>
            </article>
          ))}
        </section>
      </MainHome>
    </>
  );
}

export default Home;
