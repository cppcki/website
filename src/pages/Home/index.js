import { 
  Anchor, 
  Navbar, 
  Media 
} from "components";

import Montage from "../../assets/media/montage.mp4";

import {
  Wrapper,
  Video,
  Content,
  Motto,
  Description,
  Premotto
} from "./styles";

export function Home() {

  return (
    <Wrapper>
      <Navbar color="white"/>
      <Content>
        <Motto>
          <Premotto>
            We love service 
          </Premotto>
          so matcha!
        </Motto>
        <Description>
          Become part of one of the largest collegiate community service,
          leadership development, and friendship organization in the world.
        </Description>
        <Anchor fill="white" text="learn more" href="https://forms.gle/iBqpsS2ngCRVSnsn6"/>
        <Media/>
      </Content>
      <Video src={Montage} autoPlay muted loop/>
    </Wrapper>
  );
}