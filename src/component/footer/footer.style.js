import styled from "styled-components";

export const FooterWrap = styled.footer`
  width: 100%;
<<<<<<< HEAD
  background: #232323;
=======
  background-color: white;
>>>>>>> 9800c076c96033d3e519e203f69b0ebae47b459a
  color: #fff;
  position: relative;
  bottom: 0;
  left: 0;

  .FooterContainer {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 60px 0;
    color: black;
  }

  .col {
    display: flex;
    flex-direction: column;
    gap: 10px;

    .LogoContainer {
      margin-bottom: 30px;

      img {
        width: 48px;
        height: 48px;
        object-fit: cover;
      }
    }

    .connections {
      display: flex;
      flex-direction: column;
      gap: 15px;

      .connection {
        display: flex;
        align-items: center;
        gap: 5px;

        img {
          backGround: #fff;
          border-radius: 50%;
          padding:4px;
        }
      }
    }
  }
`;
