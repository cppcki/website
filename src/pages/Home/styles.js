import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100vh;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  align-content: center;
  height: 100%;
`;

export const Content = styled.div`
  /* display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: left;
  height: 100%;
  width: 100%; */
  margin: 5%;
`;

export const Left = styled.div`
  width: 30%;
  margin: 5% 0 5% 0;
`;

export const Right = styled.div`
  flex: 1;
  margin: 5% 5% 5% 0;
  background-color: red;
`;

export const Motto = styled.div`
  margin: 3% 0 0 0;
  font-size: 60px;
  text-transform: uppercase;
  font-weight: bolder;
`

export const Description = styled.p`
  
`

export const Image = styled.div`
  width: 100%;
  height: 100%;
  background-position-x: 10%;
  background-position-y: 60%;
  background-repeat: no-repeat;
  background-image: url(${props => props.img});
`;