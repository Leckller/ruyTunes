/* eslint-disable react/jsx-max-depth */
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { DivHeaderAndOutlet, LayoutDad, SecLayoutAlbums } from './LayoutStyle';
import homeImg from '../assets/botao-de-inicio.png';
import searchImg from '../assets/lupa(1).png';

function Layout() {
  const navigate = useNavigate();
  const userLoc = useLocation();
  const user = userLoc.pathname.split('/')[2];
  return (
    <LayoutDad>
      <SecLayoutAlbums>
        <article>
          <button
            onClick={ () => navigate(`home/${user}`) }
          >
            <img src={ homeImg } alt="home" />

          </button>
          <button
            onClick={ () => navigate(`search/${user}`) }
          >
            <img src={ searchImg } alt="search" />

          </button>
        </article>
        <article>
          albums
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
