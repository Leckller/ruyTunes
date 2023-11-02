import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { MainLogin } from '../Login/LoginStyle';
import { login, onOf } from '../../redux/actions/UserActions';

function Cadastro() {
  const [user, setUser] = useState({
    name: '',
    password: '',
    image: '',
    on: true,
    favoriteSongs: [],
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(login(user));
    dispatch(onOf(user));
    navigate(`/home/${user.name}`);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  return (
    <MainLogin>
      <section>
        <h1>RuyTunes</h1>
        <form action="home" onSubmit={ (e) => handleSubmit(e) }>
          <input
            type="text"
            value={ user.name }
            name="name"
            onChange={ (e) => handleChange(e) }
            required
            placeholder="name"
          />
          <input
            type="password"
            placeholder="password"
            required
            name="password"
            value={ user.password }
            onChange={ (e) => handleChange(e) }
            minLength={ 8 }
            maxLength={ 12 }
          />

          <button type="submit">Cadastrar</button>
        </form>
      </section>
    </MainLogin>
  );
}

export default Cadastro;
