import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    filter: brightness(0%);
  }

  to {
    filter: brightness(69%);
  }
`;

export const Wrapper = styled.div``;

export const Content = styled.div`
  position: absolute;
  margin: 20px;
  top: 280px;
  z-index: 1;
`;

export const Video = styled.video`
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  filter: brightness(69%);
  animation: ${fadeIn} 3s linear;
  background-color: black;
  bottom: 0;
  z-index: -1;
`;

export const Motto = styled.div`
  font-size: min(13vw, 80px);
  line-height: 1;
  font-family: 'Permanent Marker', cursive;
  color: white;
  text-transform: uppercase;
`;

export const Premotto = styled.div`
  font-size: min(8vw, 40px);
`

export const Description = styled.p`
  color: white;
  max-width: 550px;
`;

export const Image = styled.div`
  width: 100%;
  height: 100%;
  background-position-x: 10%;
  background-position-y: 60%;
  background-repeat: no-repeat;
  background-image: url(${props => props.img});
`;