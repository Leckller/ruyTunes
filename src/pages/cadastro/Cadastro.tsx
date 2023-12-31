import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { MainLogin } from '../Login/LoginStyle';
import { login, onOf } from '../../redux/actions/UserActions';
import { GlobalState } from '../../types';

function Cadastro() {
  const [user, setUser] = useState({
    name: '',
    password: '',
    image: '',
    on: true,
    favoriteSongs: [],
    albums: [],
  });
  const userOn = useSelector((state:GlobalState) => state.UserReducer.users);
  const indexUser = userOn.findIndex((e) => e.on);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (userOn[indexUser].name === user.name) {
      return alert(
        'Já temos um usuário com esse nome\n porfavor escolha um outro nome de usuário',
      );
    }
    dispatch(login(user));
    dispatch(onOf(user));
    navigate(`/home/${user.name}`);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === 'image') {
      const imagem = e.target.value.split('\\')[2];
      setUser({ ...user, [e.target.name]: imagem });
    }
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  return (
    <MainLogin>
      <section>
        <div>
          <button onClick={ () => navigate('/') }>Voltar</button>
          <h1>RuyTunes</h1>
        </div>
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
          <input
            type="file"
            alt="your photo"
            value={ user.image }
            name="image"
            onChange={ (e) => handleChange(e) }
          />
          <img src={ user.image } alt="preview" />
          <button type="submit">Cadastrar</button>
        </form>
      </section>
    </MainLogin>
  );
}

export default Cadastro;
