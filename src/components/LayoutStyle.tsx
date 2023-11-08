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

type DivHeaderAndOutletType = {
  background: string,
};

export const DivHeaderAndOutlet = styled.div<DivHeaderAndOutletType>`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  height: 100%;
  width: 100%;
  border-radius: 10px;
  header{
    display: flex;
    position: fixed;
    width: 100%;
    height: 100px;
    flex-direction: row;
    background-color: ${(prop) => prop.background};
    transition: 500ms;
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
        width: 33%;
        button{
          z-index: 2;
          width: 100%;
          margin: 0 1px 0 1px;
          height: 100%;
          border-radius: 50%;
          border: none;
          font-weight: 600;
          background-color: #3a3a3a93;
          color: white;
          cursor: pointer;
        }
      }
      div:nth-child(1){
        margin-left: 20px;
        display: flex;
        justify-content: space-around;
        width: 120px;
        height: 60px;
      }
      div:nth-child(2){
        form{
          width: 100%;
          display: flex;
          flex-direction: row;
          justify-content: center;
          input{
            width: 100%;
            background-color: #00000033;
            border: none;
            padding: 15px;
            border-radius: 10px;
            outline: none;
            color: white;
          }
        }
      }
      div:nth-child(3){
        display: flex;
        justify-content: end;
        width: 60px;
        height: 60px;
      }
    }
}
`;
