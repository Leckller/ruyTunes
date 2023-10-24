import styled from 'styled-components';

export const MainAlbums = styled.main`
  width: 100vw;
  display: flex;
  flex-direction: column;

`;

export const HeaderAlbums = styled.header`
  width: 100vw;
  height: 30vh;
  margin: 1vw;
  nav{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-right: 2vw;
    button{
      width: 2rem;
      height: 2rem;
      border-radius: 100%;
      border: none;
      background-color: black;
      margin: 0 5px;
      color: white;
      cursor: pointer;
    }
  }
  section{
    display: flex;
    height: 100%;
    margin: 1vw 0%;
    div{
      display: flex;
      flex-direction: column;
      justify-content: end;
      h1{
        margin: 0 1vw;
        font-size: 5rem;
      }
      span{
        display: flex;
        align-items: center;
        h3{
          margin: 0 1vw;
        }
        h4{
          margin: 0 1vw;
        }
        h5{
          margin: 0 1vw;
        }
      }
    }
  }
`;
