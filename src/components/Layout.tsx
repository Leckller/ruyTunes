/* eslint-disable react/jsx-max-depth */
import { Outlet } from 'react-router-dom';
import { DivHeaderAndOutlet, LayoutDad, SecLayoutAlbums } from './LayoutStyle';

function Layout() {
  return (
    <LayoutDad>
      <SecLayoutAlbums>
        <article>
          <button>home</button>
          <button>search</button>
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
