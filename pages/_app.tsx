import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider, useSession } from "next-auth/react";

import { Permanent_Marker } from "@next/font/google";
import React from "react";
import Router from "next/router";

const marker = Permanent_Marker({
  variable: "--marker-font",
  weight: "400",
  subsets: ["latin"]
});

type AuthProps = {
  access?: any
  children?: any
}

const ROLE_RANK = {
  "GUEST": 0,
  "MEMBER": 100,
  "ADMIN": 255
}

function Auth({ access, children }: AuthProps) {

  const { data, status } = useSession({
    required: true,
    onUnauthenticated() {
      Router.push(`${window.location.origin}${access.unauthorized}`);
    },
  });

  if (status === "loading") {
    return <p>Loading . . .</p> 
  }

  if (data.user)

  return children;
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <div className={marker.variable}>
        {Component.auth ? (
          <Auth access={Component.auth}>
            <Component {...pageProps} />
          </Auth>
        ): (
          <Component {...pageProps} />
        )}
      </div>
    </SessionProvider>
  );
}