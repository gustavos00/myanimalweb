import styled from "styled-components";

import { ReactComponent as CircleImage } from "../../assets/images/homeDog.svg";
import { device } from "../../assets/styles/medias";

export const Image = styled(CircleImage)`
  @media ${device.laptopL} {
    width: 500px;
  }
`;

export const Container = styled.div`
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  @media ${device.laptopL} {
  }

  @media ${device.tablet} {
    background: red;
  }

  @media ${device.laptop} {
    padding: 6.2vw;
    height: auto;

    flex-direction: column;
    align-items: center;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  h1 {
    color: #2b303a;
    font-size: 100px;
    text-transform: uppercase;

    @media ${device.laptopL} {
      font-size: 60px;
    }

    @media ${device.laptop} {
      font-size: 50px;
    }

    @media ${device.tablet} {
      font-size: 40px;
    }

    @media ${device.mobileL} {
      font-size: 25px;
    }
  }
`;

export const AccessContainer = styled.div`
  width: 612px;
  padding: 10px;

  display: flex;
  align-items: center;

  border-left: 5px solid #f09c79;

  p {
    font-size: 36px;
    color: #999797;

    @media ${device.tablet} {
      font-size: 28px;
    }
  }

  button {
    text-decoration: none;
    color: #f09c79;
    font-size: 36px;

    background: none;
    border: none;

    transition: all .3s ease-in-out;

    @media ${device.tablet} {
      font-size: 28px;
    }

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const ModalContainer = styled.div`
  width: 400px;
  height: 400px;

  background-color: #fff;
  border-radius: 15px;
`;
