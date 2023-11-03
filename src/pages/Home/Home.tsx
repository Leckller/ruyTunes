/* eslint-disable react/jsx-max-depth */
import { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import searchAlbumsAPI from '../../services/albumsApi';
import { AlbumType } from '../../types';
import { FormHome, HeaderHome, MainHome } from './HomeStyle';
import Loading from '../../components/Loading';
import Lupa from '../../assets/lupa(1).png';

function Home() {
  const userLoc = useLocation();
  const user = userLoc.pathname.split('/')[2];
  const [search, setSearch] = useState<AlbumType[]>([]);
  const [pesquisa, setPesquisa] = useState('');
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const effect = async () => {
      setLoading(true);
      const response = await searchAlbumsAPI('pop');
      console.log(response);
      setSearch(response);
      setLoading(false);
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
  if (loading) return <Loading />;
  return (
    <>
      oi
      <MainHome>
        {[0].length > 2 && <aside>Playlists</aside>}
        <section>
          {search.length > 0 && search.map((e) => (
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
    </>
  );
}

export default Home;
