/* eslint-disable react/jsx-max-depth */
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { DivHeaderAndOutlet, LayoutDad, SecLayoutAlbums } from './LayoutStyle';
import homeImg from '../assets/botao-de-inicio.png';
import searchImg from '../assets/lupa(1).png';
import { Dispatch, GlobalState } from '../types';
import fHeart from '../assets/silhueta-de-formato-simples-de-coracao.png';
import { fetchSearch } from '../redux/actions/UserActions';

function Layout() {
  const navigate = useNavigate();
  const loc = useLocation();
  const dispatch: Dispatch = useDispatch();
  const [pesquisa, setPesquisa] = useState('');
  const [scrollLoc, setScrollLoc] = useState<number>(0);
  const user = useSelector((state:GlobalState) => state.UserReducer.users
    .find((e) => e.on));
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(fetchSearch(pesquisa));
    console.log(pesquisa);
  };
  return (
    <LayoutDad>
      <SecLayoutAlbums>
        <article>
          <button
            onClick={ () => navigate(`home/${user?.name}`) }
          >
            <img src={ homeImg } alt="home" />

          </button>
          <button
            onClick={ () => navigate(`search/${user?.name}`) }
          >
            <img src={ searchImg } alt="search" />

          </button>
        </article>
        <article>
          <button onClick={ () => navigate('/userAlbum/curtidos') }>
            <img src={ fHeart } alt="curtidos" />
          </button>

          {user?.albums.map((e) => (
            <button key={ e.infos.path } onClick={ () => navigate(e.infos.path) }>
              <img src={ e.infos.image } alt={ e.infos.alt } />
            </button>
          ))}
        </article>
      </SecLayoutAlbums>
      <DivHeaderAndOutlet
        onScrollCapture={ (e) => setScrollLoc(e.target.scrollTop) }
        background={ scrollLoc > 205 ? '#1e1e1ed9' : '' }
      >
        <header>
          <nav>
            <div>
              <button onClick={ () => navigate(-1) }>{'<'}</button>
              <button onClick={ () => navigate(1) }>{'>'}</button>
            </div>
            <div>
              {loc.pathname.split('/')[1] === 'search' && (
                <form onSubmit={ (e) => handleSubmit(e) }>
                  <input
                    type="text"
                    value={ pesquisa }
                    onChange={ (e) => setPesquisa(e.target.value) }
                    placeholder="Pesquisa por Cantor / Banda"
                  />
                </form>
              )}
            </div>
            <div>
              <button>
                perfil
              </button>
            </div>
          </nav>
        </header>
        <Outlet />
      </DivHeaderAndOutlet>
    </LayoutDad>
  );
}

export default Layout;
