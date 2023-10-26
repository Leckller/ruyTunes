import styled from 'styled-components';

export const MainHome = styled.main`
  display: flex;
  flex-direction: row;
  aside{
    position: absolute;
  }
  section{
    display: flex;
    flex-flow: row wrap;
    article{
      width: 15%;
      height: 13%;;
      flex-grow: 1;
      display: flex;
      border-radius: 5%;
      border: solid black 1px;
      background-color: #323232ac;
      margin: 10px;
      a{
        display: flex;
        height: 100%;
        flex-direction: column;
        justify-content: space-around;
        flex-grow: 1;
        padding: 10%;
        text-decoration: none;
        color: white;
        h2{
          text-align: start;
        }
        img{
          border-radius: 15%;
        }
      }
    }
  }
  @media (max-width: 500px) {
    section{
      article{
        width: 50%;
        height: 30vh;
      }
    }
  }
`;

export const HeaderHome = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100vw;
  height: 12vh;
  align-items: center;
  div{
    width: 33%;
    display: flex;
    justify-content: center;
  }
  nav{
    width: 33%;
    display: flex;
    flex-direction: column;
    align-items: end;
    justify-content: space-around;
    a{
      width: 50%;
    }
  }
`;

export const FormHome = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  label{
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 2vh;
    width: 100%;
    height: 20%;
    border-radius: 25px;
    border: none;
    outline: none;
    input{
    padding: 2vh;
    margin-left: 1vh;
    width: 100%;
    padding-left: 30px;
    height: 20%;
    border-radius: 25px;
    border: none;
    outline: none;
  }
  button{
    position: absolute;
    background-color: transparent;
    border: none;
    img{
    width: 20px;
    margin: 0 0 0 15px;
    }
}
  }
`;
