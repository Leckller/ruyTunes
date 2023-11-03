import styled from 'styled-components';

export const LayoutDad = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 100vh;
  padding: 20px 0 0 10px;
  div{
    width: 100%;
  }
`;

export const SecLayoutAlbums = styled.section`
    display: flex;
    flex-direction: column;
    width: 80px;
    height: 95vh;
    article{
      display: flex;
      padding: 10px;
      flex-direction: column;
      margin-bottom: 10px;
      border-radius: 10px;
      margin-right: 10px;
      align-items: center;
      box-shadow: 3px 3px 10px black;
      img{
        width: 100%;
      }
      button{
        cursor: pointer;
      }
    }
    article:nth-child(1){
      height: 30%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      button{
        width: 100%;
        height: 50%;
        background-color: transparent;
        border: none;
      }
    }
    article:nth-child(2){
      height: 100%;
    }
`;

export const DivHeaderAndOutlet = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  height: 100%;
  width: 100%;
  header{
    display: flex;
    position: fixed;
    width: 100%;
    height: 50px;
    flex-direction: row;
    nav{
      display: flex;
      width: 90%;
      height: 100%;
      margin-top: 10px;
      margin-left: 10px;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      div{
        button{
          width: 100%;
          margin: 0 1px 0 1px;
          height: 100%;
          border-radius: 50%;
        }
      }
      div:nth-child(1){
        margin-left: 20px;
        display: flex;
        justify-content: space-around;
        width: 80px;
        height: 80%;
      }
      div:nth-child(2){
        display: flex;
        width: 40px;
        justify-content: end;
        height: 40px;
      }
    }
}
`;
