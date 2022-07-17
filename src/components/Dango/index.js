import { 
  Container, 
  Content,
  ImageStack,
  ImageStackBottom,
  ImageStackMiddle,
  ImageStackTop,
  Left, 
  Right,
} from "./styles";

import { Anchor } from "components/Anchor";
import goat from "./goatDerric.jpg";
import totoro from "./totoroWonderCon.jpg";
import group from "./groupDango.jpg";

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
          <h1 id="title">Become a Dango</h1>
          <p id="desc">
            Become part of one of the largest collegiate community service, leadership development, and freindship organization in the world!
          </p>
          <Anchor text="Learn More" href="./About"/>
        </Content>
      </Left>
      <Right>
        <ImageStack>
          <ImageStackTop>
            <img src= { group } width= "500"/>
          </ImageStackTop>
          <ImageStackMiddle>
            <img src= { goat } width= "500"/>
          </ImageStackMiddle>
          <ImageStackBottom>
            <img src= { totoro } width= "300"/>
          </ImageStackBottom>
        </ImageStack>
      </Right> 
    </Container>
  );
}