import styled from 'styled-components';

export const MainAlbums = styled.main`
  width: 100vw;
  margin: 5vh 1vw;
  display: flex;
  justify-content: center;
  table{
    width: 100%;
    margin-right: 2vw;
    img{
      width: 100%;
    }
    button{
      width: 30px;
      background-color: transparent;
      border: none;
      cursor: pointer;
    }
  }
`;

export const AudioAlbums = styled.audio`
`;

type HeaderAlbumsType = {
  Colors: { one: string, two: string, three: string }
};

export const HeaderAlbums = styled.header<HeaderAlbumsType>`
  width: 100vw;
  height: 40vh;
  padding: 1vw;
  overflow: hidden;
  background: linear-gradient(${(props) => props.Colors.one}
  , ${(props) => props.Colors.two});
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
    height: 80%;
    margin: 1vw 0%;
    div{
      display: flex;
      flex-direction: column;
      justify-content: end;
      h1{
        margin: 0 1vw;
        font-size: 5rem;
        letter-spacing: 3px;
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
