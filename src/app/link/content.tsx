"use client";

import Header from "@/components/Header";
import useParticles from "@/utils/hooks/useParticles";

function Content() {

  const canvasRef = useParticles(10, {
    tokens: ["🍡", "🍲", "🥟", "🍤", "🍣", "🍜", "🍛", "🍘", "🍙", "🍥"],
    size: 300,
  });

  return (
    <div className="flex justify-center">
      <div className="mt-10">
        <Header/>
      </div>
      <canvas ref={canvasRef} className="z-[-1] blur-xl text-3xl fixed"></canvas>
    </div>
  );
}

export default Content;