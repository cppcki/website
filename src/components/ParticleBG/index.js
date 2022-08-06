import { useMemo } from "react";

import { Wrapper, Particles, Particle } from "./styles";

const PARTICLES = 10;

export function ParticleBG() {
  const particle = useMemo(() => {
    const tokens = ["🍙", "🍥", "🍱", "🍤", "🍲", "🍘", "🍛", "🍡", "🍵", "🍣"];

    const getRandom = (min, max) => {
      return Array.from(new Array(PARTICLES)).map((x) =>
        Math.floor(Math.random() * (max - min) + min)
      );
    };
    const delays = getRandom(2, 10);
    const durations = getRandom(10, 50);
    const foods = new Array(PARTICLES).fill(1).map((_, index) => {
      return {
        token: tokens[Math.floor(Math.random() * tokens.length)],
        delay: delays[index],
        duration: durations[index],
      };
    });

    return foods.map((props, index) => {
      const { token } = props;
      return (
        <Particle key={index} {...props}>
          {token}
        </Particle>
      );
    });
  }, []);

  return <Particles>{particle}</Particles>;
}
