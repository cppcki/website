import styled from "styled-components";

import { Anchor } from "../components/Anchor";
import DericGoat from "../assets/images/goatDerric.jpg";
import Totoro from "../assets/images/totoroWonderCon.jpg";
import DangoGroup from "../assets/images/groupDango.jpg";

// Project directory
// `cd ~/Documents/cki-website`

// Update dependencies
// `npm` || `npm install` # based on package.json

// Run Server
// `npm start`

export function Dango(){
  return (
    <Container>
      <Left>
        <Content>
          <Heading>Become a Dango</Heading>
          <p>
            Become part of one of the largest collegiate community service, leadership development, and freindship organization in the world!
          </p>
          <Anchor text="Learn More" href="./About"/>
        </Content>
      </Left>
      <Right>
        <Collage1 src={DangoGroup} width= "500" alt="a group of dangos"/>
        <Collage2 src={DericGoat} width= "500" alt="deric the goat trolling dani"/>
        <Collage3 src={Totoro} width= "300" alt="a big cat going to eat vincent"/>
      </Right> 
    </Container>
  );
}

const Container = styled.div`
  /* background-color: red; */
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  flex: 1;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

const Heading = styled.h1`
  margin-block-start: 0;
  margin-block-end: 0;
`;

const Left = styled.div`
  /* background-color: orange; */
  width: 40%;
  min-width: 300px;
  height: 400px;
  margin-left: 40px;
  margin-top:100px;
  align-items: center;
  justify-content: center;
`;

const Right = styled.div`
  background-color: yellow;
  height: 300px;
  margin-left: 50px;
`;

const Collage1 = styled.img`
  position: absolute;
  z-index: 2;
`;

const Collage2 = styled.div`
  width: 66%;
  position: absolute;
  z-index: 1;
`;

const Collage3 = styled.div`
  width: 50%;
  position: absolute;
`;