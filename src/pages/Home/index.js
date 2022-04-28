import { useRef, useEffect } from "react";

import { 
  Anchor, 
  Media,
  Footer,
  Navbar,
  Events,
} from "components";

import Montage from "../../assets/media/montage.mp4";

import {
  Wrapper,
  Video,
  Content,
  CarouselContent,
  Motto,
  Description,
  Premotto,
  Container
} from "./styles";

export function Home() {

  const videoRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!videoRef) return;
    videoRef.current.playbackRate = 0.65;
  }, []);

  return (
    <Wrapper>
      <Navbar containerRef={containerRef} position="absolute" color="white"/>
      <Container ref={containerRef}>
        <CarouselContent>
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
        </CarouselContent>
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
        <Content>
          <Events/>
          <Footer/>
        </Content>
      </Container>
    </Wrapper>
  );
}