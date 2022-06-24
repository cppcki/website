import { useRef, useEffect } from "react";

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

  const videoRef = useRef(null);

  useEffect(() => {
    if (!videoRef) return;
    videoRef.current.playbackRate = 0.7;
  }, []);

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
        <Anchor
          fill="white" 
          text="learn more" 
          href="https://forms.gle/iBqpsS2ngCRVSnsn6"
        />
        <Media/>
      </Content>
      <Video
        ref={videoRef}
        src={Montage}
        autoPlay
        playsInline
        defaultMuted
        preload="auto"
        onContextMenu={() => false}
        muted 
        loop
      />
    </Wrapper>
  );
}