import styled from 'styled-components';

export const MainAlbums = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #00000029;
  table{
    margin: 5vh 1vw;
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
  Colors: string
};

export const ColorDiv = styled.div<HeaderAlbumsType>`
    background: linear-gradient(${(props) => props.Colors}
  , #2222225b);
`;

export const HeaderAlbums = styled.section<HeaderAlbumsType>`
  width: 100vw;
  padding: 1vw;
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
      background-color: #494949;
      margin: 0 5px;
      color: white;
      cursor: pointer;
      img{
      width: 10px;
      transform: scale(300%)
    }
    }
  }
  section{
    display: flex;
    height: 80%;
    margin: 1vw 0%;
    div:nth-child(1){
      width: 30%;
      padding-left: 30px;
    }
    div:nth-child(2){
      display: flex;
      flex-direction: column;
      justify-content: end;
      h1{
        margin: 0 1vw;
        font-size: 3rem;
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
