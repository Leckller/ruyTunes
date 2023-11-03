import { Route, Routes } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import Albums from './pages/Albums/Albums';
import Cadastro from './pages/cadastro/Cadastro';
import Layout from './components/Layout';

function App() {
  const GlobalStyle = createGlobalStyle`
    *{
      padding: 0;
      margin: 0;
      box-sizing: border-box;
    }
    body{
      background-color: #222;
      color: #eaeaea;
      overflow-x: hidden;
    }
  `;
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={ <Login /> } />
        <Route element={ <Layout /> }>
          <Route path="/home/:user" element={ <Home /> } />
          <Route path="/album/:id" element={ <Albums /> } />
        </Route>
        <Route path="/cadastro" element={ <Cadastro /> } />
      </Routes>
    </>
  );
}

export default App;
