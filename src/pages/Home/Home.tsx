/* eslint-disable react/jsx-max-depth */
import { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import searchAlbumsAPI from '../../services/albumsApi';
import { AlbumType } from '../../types';
import Loading from '../../components/Loading';
import { DivBemVindo, MainHome, SecAlbums } from './HomeStyle';
import albumGenres from '../../services/AlbumGenres';

function Home() {
  const userLoc = useLocation();
  const user = userLoc.pathname.split('/')[2];
  const [searchPop, setSearchPop] = useState<AlbumType[]>([]);
  const [searchRock, setSearchRock] = useState<AlbumType[]>([]);
  const [searchMpb, setSearchMpb] = useState<AlbumType[]>([]);
  const [pesquisa, setPesquisa] = useState('');
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const effect = async () => {
      setLoading(true);
      const responsePop = await albumGenres('pop');
      const responseRock = await albumGenres('rock');
      const responseMpb = await albumGenres('mpb');
      setSearchPop(responsePop.slice(0, 5));
      setSearchRock(responseRock.slice(6, 11));
      setSearchMpb(responseMpb.slice(0, 5));
      setLoading(false);
    };
    effect();
  }, []);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const effect = async () => {
      const response = await searchAlbumsAPI(pesquisa);
      setSearchPop(response);
    };
    effect();
  };
  if (loading) return <Loading />;
  return (
    <MainHome>
      <DivBemVindo>
        {`Olá ${user}`}
      </DivBemVindo>
      <SecAlbums>
        <div>
          <h2>Pop</h2>
          <Link to="/">Ver mais</Link>
        </div>
        {searchPop.length > 0 && searchPop.map((e) => (
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
      <SecAlbums>
        <div>
          <h2>Rock</h2>
          <Link to="/">Ver mais</Link>
        </div>
        {searchRock.length > 0 && searchRock.map((e) => (
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
      <SecAlbums>
        <div>
          <h2>Mpb</h2>
          <Link to="/">Ver mais</Link>
        </div>
        {searchMpb.length > 0 && searchMpb.map((e) => (
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
    </MainHome>
  );
}

export default Home;
