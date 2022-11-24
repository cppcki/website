import { useRef, useEffect } from "react";
import Head from "next/head";

import Navbar from "@app/components/Navbar";
import Anchor from "@app/components/Anchor";

import { prisma, serialize } from "@app/prisma";
import { trpc } from "@app/utils/trpc";

function Montage() {

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!videoRef.current) return;
    videoRef.current.playbackRate = 0.65;
  }, []);

  return (
    <div className="px-10">
      <video 
        autoPlay
        playsInline
        muted
        loop
        ref={videoRef}
        className="w-full h-[80vh] brightness-50 object-cover rounded-2xl">
        <source src="video/montage.mp4" type="video/mp4"/>
      </video>
    </div>
  );
}

function Hero() {
  return (
    <div className="absolute z-10 inset-y-1/3">
      <div className="flex m-auto">
        <div className="m-20 max-w-[500px]">
          <h3 className="font-marker text-5xl leading-[0.5] text-white">We love service</h3>
          <h1 className="font-marker text-[80px] leading-none text-white">so matcha!</h1>
          <p className="text-white">
            Become part of one of the largest collegiate community service, leadership development, and friendship organization in the world.
          </p>
          <Anchor className="text-white my-2" href="https://forms.gle/iBqpsS2ngCRVSnsn6">learn more</Anchor>
        </div>
      </div>
    </div>
  );
}

export default function Home(props: any) {

  const { events } = props;

  // const hello = trpc.hello.useQuery({ text: "sfsfsfds" });
  // console.log(hello.data);

  return (
    <div className="max-w-[1440px] m-auto">
      <Head>
        <title>CKI @ CPP</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <main className="flex flex-col">
        <Hero/>
        <Montage/>
      </main>
    </div>
  );
}

export async function getServerSideProps(context: any) {

  const events = await prisma.event.findMany({
    where: {
      published: false
    }
  });

  return {
    props: {
      events: serialize(events)
    }
  };
}