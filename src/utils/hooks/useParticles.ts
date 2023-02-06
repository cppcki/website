import { useState, useEffect, useRef } from "react";

type Vector2 = {
  x: number,
  y: number
}

type Size = {
  width: number,
  height: number
}

type ParticleInstance = {
  update: () => void;
  changeDirection: (axis: "x" | "y") => void;
  draw: (context: CanvasRenderingContext2D) => void;
  isInBound: () => void;
}

class Particle {
  private token: string;
  private size: number;
  private angle: number;

  private velocity: Vector2;
  private position: Vector2;
  private direction: Vector2;
  private screen: Size;

  constructor(width: number, height: number, token: string, size: number) {
    this.token = token;
    this.size = size;
    this.angle = Math.random() * 360;

    this.screen = {
      width: width,
      height: height
    };

    this.velocity = {
      x: 1 * Math.random() + 0.05,
      y: 1 * Math.random() + 0.05
    };

    this.position = {
      x: Math.random() * this.screen.width,
      y: Math.random() * this.screen.height
    };

    this.direction = {
      x: -1 + Math.random() * 2,
      y: -1 + Math.random() * 1
    };
  }

  update() {
    this.angle = this.angle + 1;
    this.position.x += this.velocity.x * this.direction.x;
    this.position.y += this.velocity.y * this.direction.y;

    this.isInBound();
  }

  changeDirection(axis: "x" | "y") {
    this.direction[axis] = this.direction[axis] * -1;
  }

  draw(context: CanvasRenderingContext2D) {
    context.save();
    context.translate(this.position.x, this.position.y);
    context.rotate(this.angle * Math.PI / 360);
    context.beginPath();
    context.font = `${this.size}px sans-serif`;
    context.fillText(this.token, 0 - this.size / 2, this.size / 2);
    context.fill();
    context.restore();
  }

  isInBound() {
    if (this.position.x >= this.screen.width) {
      this.position.x = this.screen.width;
      this.changeDirection("x");
    } 
    
    if (this.position.x <= 0) {
      this.position.x = 0;
      this.changeDirection("x");
    }

    if (this.position.y >= this.screen.height) {
      this.position.y = this.screen.height;
      this.changeDirection("y");
    }
    
    if (this.position.y <= 0) {
      this.position.y = 0;
      this.changeDirection("y");
    }
  }
}

type TokenOptions = {
  tokens: string[],
  size: number,
}

function useParticles(amountOfParticles: number, tokenOptions: TokenOptions) {

  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    console.log("hi");
    if (!ref.current) return;

    const context = ref.current.getContext("2d");
    if (!context) return;

    const currentWidth = width === 0 ? window.innerWidth : width;
    const currentHeight = height === 0 ? window.innerHeight : height;

    ref.current.width = currentWidth;
    ref.current.height = currentHeight;

    const particles: ParticleInstance[] = [];

    // create the particles and draw them onto canvas.
    for (let i = 0; i < amountOfParticles; i++) {
      const token = tokenOptions.tokens[Math.floor(Math.random() * tokenOptions.tokens.length)];
      const particle = new Particle(currentWidth, currentHeight, token, tokenOptions.size);
      particle.draw(context);
      particles.push(particle);
    }

    function animate() {
      if (!context) {
        throw new Error("Failed to animate canvas due to undefined context");
      }

      context.clearRect(0, 0, currentWidth, currentHeight);

      for (const particle of particles) {
        particle.draw(context);
        particle.update();
      }

      window.requestAnimationFrame(animate);
    }

    function onResize() {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    }
    
    window.addEventListener("resize", onResize);
    const renderFrame = window.requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", onResize);
      window.cancelAnimationFrame(renderFrame);
    };
  }, [width, height, amountOfParticles]);

  return ref;
}

export default useParticles;