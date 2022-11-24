import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider, useSession } from "next-auth/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Permanent_Marker } from "@next/font/google";
import React from "react";
import Router from "next/router";
import { trpc } from "@app/utils/trpc";

type AuthProps = {
  access?: any
  children?: any
}

const ROLE_RANK = {
  "GUEST": 0,
  "MEMBER": 100,
  "ADMIN": 255
};

const marker = Permanent_Marker({
  variable: "--marker-font",
  weight: "400",
  subsets: ["latin"]
});

const queryClient = new QueryClient();

function Auth({ access, children }: AuthProps) {

  const { data, status } = useSession({
    required: true,
    onUnauthenticated() {
      Router.push(`${window.location.origin}${access.unauthorized}`);
    },
  });

  if (status === "loading") {
    return <p>Loading . . .</p>; 
  }

  return children;
}

function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  );
}

export default trpc.withTRPC(App);