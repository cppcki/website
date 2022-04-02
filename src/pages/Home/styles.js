import styled, { keyframes } from "styled-components";

export const Wrapper = styled.div`
  height: 100vh;
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
  align-content: center;
  height: 100%;
  z-index: 1;

  @media (max-width: 650px) {
    align-content: unset;
  } 
`;

const frames = keyframes`
 from {
  transform: translateY(100%) rotate(-50deg);
 } 

 to {
  transform: translateY(calc(-100vh + -100%)) rotate(20deg);
 }
`;

export const Particles = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-around;
  overflow: hidden;
  z-index: -1;
`;

export const Particle = styled.div`
  animation: ${frames} 10s linear infinite;
  align-self: flex-end;
  transform: translateY(100%);
  width: 20px;
  height: 20px;
  font-size: 20px;
  animation-delay: ${props => props.delay}s;
  animation-duration: ${props => props.duration}s;
`;

export const Content = styled.div`
  margin: 5%;
`;

export const Left = styled.div`
  width: 30%;
  margin: 5% 0 5% 0;

  @media (max-width: 1330px) {
    width: 50%;
  }

  @media (max-width: 650px) {
    width: 100%
  }
`;

export const Right = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  line-height: 0;
  overflow: hidden;
  max-height: 90%;
  gap: 5px;
  align-self: center;
  margin: 5% 5% 5% 0;
  & > img {
    width: auto;
    height: 17vh;
    flex-grow: 1;
    max-height: 100%;
    object-fit: cover;
    vertical-align: bottom;
  }

  @media (max-width: 1825px) {
    & > img {
      height: 16vh;
    }
  }

  @media (max-width: 1721px) {
    & > img {
      height: 15vh;
    }
  }

  @media (max-width: 1500px) {
    & > img {
      height: 14.5vh;
    }
  }

  @media (max-width: 1300px) {
    & > img {
      height: 13vh;
    }
  }

  @media (max-width: 650px) {
    width: 100%;
    flex: none;
    margin: 0;
    gap: 0;
  }
`;

export const Motto = styled.div`
  margin: 3% 0 0 0;
  font-size: 60px;
  text-transform: uppercase;
  font-weight: bolder;
`;

export const Description = styled.p``;

export const Image = styled.div`
  width: 100%;
  height: 100%;
  background-position-x: 10%;
  background-position-y: 60%;
  background-repeat: no-repeat;
  background-image: url(${props => props.img});
`;