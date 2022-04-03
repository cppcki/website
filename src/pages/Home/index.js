import { useMemo } from "react";
import { Anchor, Header, Navbar } from "../../components";
import { Media } from "../../components/Media";

import {
  Wrapper,
  Container,
  Left,
  Right,
  Motto,
  Content,
  Description,
  Particles,
  Particle,
} from "./styles";

function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(
  require.context("../../assets/images/events/", 
  false, /\.(png|jpe?g|svg)$/)
);

const PARTICLES = 10;

export function Home() {

  const particle = useMemo(() => {

    const tokens = ["🍙", "🍥", "🍱", "🍤", "🍲", "🍘", "🍛", "🍡", "🍵"];

    const getRandom = (min, max) => {
      return Array.from(
        new Array(PARTICLES))
        .map(x => Math.floor(Math.random() * (max - min) + min));
    }
    const delays = getRandom(2, 10);
    const durations = getRandom(10, 50);
    const foods = new Array(PARTICLES).fill(1).map((_, index) => {
      return {
        token: tokens[Math.floor(Math.random() * tokens.length)],
        delay: delays[index],
        duration: durations[index]
      }
    });

    return foods.map((props, index) => {
      const { token } = props;
      return (
        <Particle key={index} {...props}>{token}</Particle>
      )
    });
  }, []);

  return (
    <Wrapper>
      <Particles>
        {particle}
      </Particles>
      <Container>
        <Left>
          <Navbar/>
          <Content>
            <Header/>
            <Motto>
              We love service so matcha 🍵
            </Motto>
            <Description>
              Become part of one of the largest collegiate community service, 
              leadership development, and friendship organization in the world.
            </Description>
            <Anchor text="learn more" href="https://forms.gle/RvJPvBacXExm34kP8"/>
            <Media/>
          </Content>
        </Left>
        <Right>
          {images.map((image, index) => {
            return (
              <img key={index} src={image} alt="memories"/>
            );
          })}
        </Right>
      </Container>
    </Wrapper>
  );
}