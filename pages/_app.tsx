import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";

import { Permanent_Marker } from "@next/font/google";

const marker = Permanent_Marker({
  variable: "--marker-font",
  weight: "400",
  subsets: ["latin"]
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <div className={marker.variable}>
        <Component {...pageProps} />
      </div>
    </SessionProvider>
  );
}
