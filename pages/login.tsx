import Head from "next/head";
import { SyntheticEvent, useCallback, useEffect, useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from 'next/navigation';

import TextInput from "@app/components/TextLabel";
import Button from "@app/components/Button";
import Header from "@app/components/Header";

type LoginInput = {
  email: string
  password: string
}

function Login() {

  const { data, status } = useSession();
  const router = useRouter();

  if (status === "authenticated") {
    router.push("/dashboard");
  }
  
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

  const handleDiscordAuth = useCallback(() => {
    signIn("discord", {
      callbackUrl: `${window.location.origin}/dashboard`
    });
  }, []);

  return (
    <div>
      <Head>
        <title>Login - Circle K @ CPP </title>
      </Head>
      <section className="flex w-screen h-screen">
        <main className="flex m-auto gap-x-40 flex-wrap">
          <div className="flex flex-col w-96 h-60">
            <Header/>
            <h1 className="text-3xl font-medium m-auto">Stay connected with the circle and never ever miss another dango again.</h1>
          </div>
          <div className="w-72">
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
              <Button className="mt-2">Log in</Button>
            </form>
            <div className="flex flex-col mt-3">
              <Button design="none" className="text-sm hover:text-blue">forgot password?</Button>
              <hr className="my-2 border-[0.2] border-gray"/>
              <Button design="none" className="text-sm p-2">Don't have an account? <span className="ml-1 text-gold">Sign up</span></Button>
              <Button design="outline" className="mt-1" onClick={handleDiscordAuth}>Login with Discord</Button>
            </div>
          </div>
        </main>
      </section>
    </div>
  );
}

export default Login;