import styled from 'styled-components';

export const MainLogin = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  section{
    height: 60%;
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #eaeaea;
    border-radius: 5%;
    @media (max-width: 420px) {
      width: 90%;
    }
    form{
      padding: 1vw;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      input{
        margin: 10px;
        padding: 5px;
        border-radius: 5%;
        max-width: 80%;
        width: 50%;
      }
      button{
        padding: 5px;
        border-radius: 5%;
        max-width: 80%;
        width: 50%;
      }
    }
  }
`;
