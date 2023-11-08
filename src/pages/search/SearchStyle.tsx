import styled from 'styled-components';

export const MainSearch = styled.main`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  padding: 10px;
  background: linear-gradient(#282aa170, black);
  overflow-y: auto;
  div{
    width: 100%;
    height: 20vh;
  }
  section{
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    article{
      width: 20vw;
      min-height: auto;
      max-height: 300px;
      display: flex;
      align-items: center;
      padding: 20px 0;
      margin: 20px;
      flex-grow: 1;
      background: linear-gradient(transparent,#282aa170);
      border-radius: 10px;
      box-shadow: 3px 3px 10px black;
      a{
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-around;
        color: white;
        text-decoration: none;
        text-align: center;
        div{
          width: 100%;
          height: 30%;
          display: flex;
          flex-flow: row wrap;
          justify-content: center;
          padding: 2px;
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
