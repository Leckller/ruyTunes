/* eslint-disable react/jsx-max-depth */
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AlbumType, GlobalState } from '../../types';
import Loading from '../../components/Loading';
import { DivBemVindo, MainHome } from './HomeStyle';
import albumGenres from '../../services/AlbumGenres';
import Fileiras from '../../components/Fileiras';

function Home() {
  const user = useSelector((state:GlobalState) => state.UserReducer.users
    .find((e) => e.on));
  const navigate = useNavigate();
  const [searchPop, setSearchPop] = useState<AlbumType[]>([]);
  const [searchRock, setSearchRock] = useState<AlbumType[]>([]);
  const [searchMpb, setSearchMpb] = useState<AlbumType[]>([]);
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
  if (loading) return <Loading />;
  return (
    <MainHome>
      <DivBemVindo>
        {`Olá ${user?.name === undefined ? navigate('/') : user.name}`}
      </DivBemVindo>
      <Fileiras albums={ searchPop } infos={ { genre: 'Pop', rota: '/genre/Pop' } } />
      <Fileiras albums={ searchRock } infos={ { genre: 'Rock', rota: '/genre/Rock' } } />
      <Fileiras albums={ searchMpb } infos={ { genre: 'Mpb', rota: '/genre/Mpb' } } />
    </MainHome>
  );
}

export default Home;
