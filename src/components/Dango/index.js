import { 
  Container, 
  Content,
  Left, 
  Right,
} from "./styles";

import pic from "./collage1.png";
import { Anchor } from "components/Anchor";

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
        <img src={ pic } width="600" alt="picture collage of Dango memories"/>
      </Right> 
    </Container>
  );
}