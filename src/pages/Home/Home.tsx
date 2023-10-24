import { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import searchAlbumsAPI from '../../services/albumsApi';
import { AlbumType } from '../../types';
import getMusics from '../../services/musicsApi';

function Home() {
  const userLoc = useLocation();
  const user = userLoc.pathname.split('/')[2];
  const [search, setSearch] = useState<AlbumType[]>([]);
  useEffect(() => {
    const effect = async () => {
      const response = await searchAlbumsAPI('Luisa Sonza');
      const response2 = await getMusics('1488005628');
      console.log(response2);
      setSearch(response);
    };
    effect();
  }, []);
  return (
    <>
      <header>
        <h1>
          {
            `
              Bem Vindo ${user}
            `
          }
        </h1>
        <nav>
          <Link to="/configuracoes">Configurações</Link>
          <Link to="/">login</Link>
        </nav>
      </header>
      <main>
        <aside>
          Playlists
        </aside>
        <div>
          <input type="text" />
        </div>
        <section>
          {search.length > 0 && search.map((e) => (
            <article key={ e.collectionId }>
              <Link to={ `/album/${e.collectionId}` }>
                <img src={ e.artworkUrl100 } alt={ e.collectionName } />
                <h2>{e.collectionName}</h2>
              </Link>
            </article>
          ))}
        </section>
      </main>
    </>
  );
}

export default Home;
