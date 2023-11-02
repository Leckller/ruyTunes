import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { MainLogin } from './LoginStyle';
import { GlobalState } from '../../types';

function Login() {
  const [user, setUser] = useState({
    name: '',
    password: '',
  });
  const navigate = useNavigate();
  const logins = useSelector((state:GlobalState) => state.UserReducer.users);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (logins.some((eS) => eS.name === user.name && eS.password === user.password)) {
      return navigate(`/home/${user.name}`);
    }
    alert('Login inválido');
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
          <button type="submit">Logar</button>
          <Link to="/cadastro">Não possui uma conta? cadastre-se!</Link>
        </form>
      </section>
    </MainLogin>
  );
}

export default Login;
