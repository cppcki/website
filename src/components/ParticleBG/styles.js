import styled, { keyframes } from "styled-components";

const frames = keyframes`
 from {
  transform: translateY(100%) rotate(-50deg);
 } 

 to {
  transform: translateY(calc(-100vh + -100%)) rotate(360deg);
 }
`;

export const Particles = styled.div`
  position: absolute;
  height: 100%;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  overflow: hidden;
  z-index: -1;
`;

export const Particle = styled.div`
  animation: ${frames} 1s linear infinite;
  align-self: flex-end;
  transform: translateY(100%);
  width: 150px;
  height: 150px;
  font-size: 150px;
  filter: blur(15px);
  animation-delay: ${(props) => props.delay}s;
  animation-duration: ${(props) => props.duration}s;
`;

export const Wrapper = styled.div`
  height: 100%;
`;
