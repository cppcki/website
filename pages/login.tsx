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
      <main className="flex justify-around align-middle">
        <div className="flex flex-col w-96 h-60">
          <Header/>
          <h1 className="text-xl font-bold m-auto">Stay connected with the circle and never ever miss another dango again.</h1>
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
          <Button onClick={handleDiscordAuth}>Login with Discord</Button>
        </div>
      </main>
    </div>
  );
}

export default Login;