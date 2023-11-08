import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MainPefil } from './PerfilStyle';
import { GlobalState } from '../../types';
import { userEdit } from '../../redux/actions/UserActions';

function Perfil() {
  const user = useSelector((state:GlobalState) => state.UserReducer.users);
  const indexUser = user.findIndex((e) => e.on);
  const Dispatch = useDispatch();
  const navigate = useNavigate();
  const [edit, setEdit] = useState(true);
  const [NewUser, setNewUser] = useState({
    name: '',
  });
  const handleOncHange = (key: string, value: string) => {
    setNewUser({ ...NewUser, [key]: value });
  };
  return (
    <MainPefil>
      <div />
      <section>
        {edit ? (
          <article>
            <div>
              <h2>{`Name: ${user[indexUser].name}`}</h2>
              <h3>{`Músicas curtidas: ${user[indexUser].favoriteSongs.length}`}</h3>
              {/* <h3>{`Image: ${user[indexUser].image}`}</h3> */}
            </div>
            <div>
              <button
                onClick={ () => {
                  navigate('/');
                } }
              >
                Desconectar
              </button>
              <button onClick={ () => setEdit(false) }>Editar</button>
            </div>
          </article>
        ) : (
          <article>
            <div>
              <label htmlFor="Name">
                Name:
                <input
                  type="text"
                  name="name"
                  placeholder={ user[indexUser].name }
                  onChange={ (({ target }) => handleOncHange(target.name, target.value)) }
                />
              </label>
            </div>
            <div>
              <button
                onClick={ () => {
                  setEdit(true);
                  Dispatch(userEdit(user[indexUser], NewUser));
                } }
              >
                Salvar
              </button>
            </div>
          </article>
        )}
      </section>
    </MainPefil>
  );
}

export default Perfil;
