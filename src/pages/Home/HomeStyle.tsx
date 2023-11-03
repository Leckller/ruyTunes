import styled from 'styled-components';

export const MainHome = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  padding: 10px;
  background: linear-gradient(#282aa170, black);
  @media (max-width: 500px) {
    section{
      article{
        width: 50%;
        height: 30vh;
      }
    }
  }
`;

export const SecAlbums = styled.section`
    display: flex;
    flex-flow: row wrap;
    width: 100%;
    height: 60%;
    margin-top: 25px;
    justify-content: space-around;
    div{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      h2{
        padding: 5px;
      }
      a{
        padding: 5px;
      }
    }
    article{
      width: 220px;
      height: 85%;
      display: flex;
      box-shadow: 3px 3px 10px black;
      flex-direction: column;
      align-items: center;
      background-color: #2c2c2c;
      border-radius: 15px;
      padding: 30px 0;
      a{
        display: flex;
        flex-direction: column;
        width: 90%;
        color: white;
        text-decoration: none;
        text-align: center;
        img{
          border-radius: 5px;
        }
        h2{
          transform: translateY(20px);
        }
        h3{
          transform: translateY(20px);
        }
      }
}
`;

export const DivBemVindo = styled.section`
  width: 98%;
  height: 300px;
  background-color: #474646;
  border-radius: 10px;
  padding-top: 80px;
  margin: 0 10px 10px 10px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: start;
  font-size: 3rem;
  padding-left: 10px;
  box-shadow: 3px 3px 10px black;
`;
