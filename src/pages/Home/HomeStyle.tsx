import styled from 'styled-components';

export const MainHome = styled.main`
  display: flex;
  flex-direction: row;
  section{
    display: flex;
    flex-flow: row wrap;
    article{
      width: 15%;
      height: 13%;;
      flex-grow: 2;
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
