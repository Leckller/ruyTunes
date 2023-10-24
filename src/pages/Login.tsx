import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../redux/actions/UserActions';

function Home() {
  const [user, setUser] = useState({
    name: '',
    password: '',
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(login(user));
    navigate(`/home/${user.name}`);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  return (
    <main>
      <h1>RuyTunes</h1>
      <form action="home" onSubmit={ (e) => handleSubmit(e) }>
        <input
          type="text"
          value={ user.name }
          name="name"
          onChange={ (e) => handleChange(e) }
          required
          placeholder="xerolaine"
        />
        <input
          type="password"
          required
          name="password"
          value={ user.password }
          onChange={ (e) => handleChange(e) }
          minLength={ 8 }
          maxLength={ 12 }
        />
        <button type="submit">Logar</button>
      </form>
    </main>
  );
}

export default Home;
