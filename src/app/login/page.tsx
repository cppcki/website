"use client"

import { SyntheticEvent, useCallback, useState } from "react";
import { useRouter } from 'next/navigation';

import TextInput from "@/components/TextLabel";
import Button from "@/components/Button";
import Header from "@/components/Header";

import useParticles from "@/utils/hooks/useParticles";

type LoginInput = {
  email: string
  password: string
}

function Login() {
  const router = useRouter();

  const canvasRef = useParticles(10, {
    tokens: ["🍡", "🍲", "🥟", "🍤", "🍣", "🍜", "🍛", "🍘", "🍙", "🍥"],
    size: 300,
  });

  const [input, setInput] = useState<LoginInput>({
    email: "",
    password: ""
  });

  const handleInput = useCallback((event: SyntheticEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    setInput({
      ...input,
      [target.name]: target.value
    });
  }, [input]);

  const handleSubmit = useCallback((event: SyntheticEvent) => {
    event.preventDefault();
    console.log(input);
  }, [input]);

  const handleDiscordAuth = useCallback(async () => {
    
  }, []);

  return (
    <main className="flex w-screen h-screen">
      <article className="flex justify-center m-auto sm:gap-x-40 flex-wrap p-4">
        <div className="flex flex-col w-96 p-10 sm:p-2">
          <Header/>
          <h1 className="mt-2 sm:text-3xl text-xl font-medium">Stay connected with the circle and never ever miss another dango again.</h1>
        </div>
        <div className="w-72 sm:mt-3">
          <form onSubmit={handleSubmit} className="flex flex-col gap-2 max-w-sm">
            <TextInput
              name="email"
              label="email"
              type="text"
              placeholder="ligma@cpp.edu"
              value={input.email}
              onChange={handleInput}
            />
            <TextInput
              name="password"
              label="password"
              type="text"
              placeholder="••••••••••••••"
              value={input.password}
              onChange={handleInput}
            />
            <Button variant="fill" className="mt-2">Log in</Button>
          </form>
          <div className="flex flex-col mt-3">
            <Button className="text-sm hover:text-blue">forgot password?</Button>
            <hr className="my-2 border-[0.2] border-gray"/>
            <Button className="text-sm p-2">Don&apos;t have an account? <span className="ml-1 text-gold">Sign up</span></Button>
            <Button variant="outline" className="mt-1 bg-white" onClick={handleDiscordAuth}>Login with Discord</Button>
          </div>
        </div>
      </article>
      <canvas ref={canvasRef} className="z-[-1] blur-xl fixed text-3xl"></canvas>
    </main>
  );
}

export default Login;