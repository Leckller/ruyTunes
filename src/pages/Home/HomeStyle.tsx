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
      width: 30%;
      height: 10%;;
      flex-grow: 1;
      display: flex;
      align-items: center;
      border: solid black 1px;
      background-color: white;
      a{
        display: flex;
        height: 100%;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        flex-grow: 1;
        h2{
          text-align: center;
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
