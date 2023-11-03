/* eslint-disable react/jsx-max-depth */
import { Outlet } from 'react-router-dom';
import { LayoutDad } from './LayoutStyle';

function Layout() {
  return (
    <LayoutDad>
      <section>
        <article>
          <button>home</button>
          <button>search</button>
        </article>
        <article>
          albums
        </article>
      </section>
      <div>
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
      </div>
    </LayoutDad>
  );
}

export default Layout;
