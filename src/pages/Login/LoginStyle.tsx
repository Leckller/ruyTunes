import styled from 'styled-components';

export const MainLogin = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: black;
  background-color: #13373a;
  section{
    height: 60%;
    width: 400px;
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #ffffffbe;
    border-radius: 5%;
    @media (max-width: 420px) {
      width: 90%;
    }
    button:nth-child(1){
      position: absolute;
      left: 30px;
      top: 30px;
      border: none;
      background-color: transparent;
      cursor: pointer;
      padding: 10px;
    }
    button:nth-child(1):hover{
      margin: -1px;
      border: solid black 1px;
      border-radius: 20px;
    }
    form{
      padding: 1vw;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      gap: 10px;
      input, button{
        display: flex;
        flex-direction: start;
        padding: 10px;
        border-radius: 20px;
        border: none;
        outline: none;
        background-color: transparent;
        max-width: 80%;
        width: 50%;
      }
      input:hover{
        border: black solid 1px;
        margin: -1px;
      }
      button:hover{
        border: black solid 1px;
        margin: -1px;
      }
      button:submit{
        background-color: black;
      }
      button{
        cursor: pointer;
      }
    }
  }
  @media (max-width: 420px) {
    font-size: 1rem;
  }
`;
