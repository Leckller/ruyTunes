/* eslint-disable react/jsx-max-depth */
import { Outlet, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { DivHeaderAndOutlet, LayoutDad, SecLayoutAlbums } from './LayoutStyle';
import homeImg from '../assets/botao-de-inicio.png';
import searchImg from '../assets/lupa(1).png';
import { GlobalState } from '../types';
import fHeart from '../assets/silhueta-de-formato-simples-de-coracao.png';

function Layout() {
  const navigate = useNavigate();
  const user = useSelector((state:GlobalState) => state.UserReducer.users
    .find((e) => e.on));
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
      <DivHeaderAndOutlet>
        <header>
          <nav>
            <div>
              <button>{'<'}</button>
              <button>{'>'}</button>
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
