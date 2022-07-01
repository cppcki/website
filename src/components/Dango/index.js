import { 
  Container, 
  Content,
  Left, 
  Right
} from "./styles";

// import { Anchor } from "components";
import { Join } from "pages";

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
            Become part of one of the largest collegiate community service, leadership development, and freindship organization in the world
          </p>
        </Content>
      </Left>
      <Right>
        <img id="owo" src="https://github.com/cppcki/website/blob/e2e776c2f24a2e210810b9af7ba08979c3c78382/src/assets/images/banquet.jpg" alt = "owo"/>
        <img id="uwu" src="https://github.com/cppcki/website/blob/e2e776c2f24a2e210810b9af7ba08979c3c78382/src/assets/images/events/22.jpg" alt="totoro and random dude"/>
        <img id="owu" src="https://raw.githubusercontent.com/cppcki/website/e2e776c2f24a2e210810b9af7ba08979c3c78382/src/assets/images/events/2.jpg" alt="the GOAT Derric"/>
        
      </Right> 
    </Container>
  );
}