
import "@/app/globals.css";
import Navbar from "@/components/Navbar";
import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="max-w-7xl m-auto px-8">
        <Navbar/>
        {children}
      </body>
    </html>
  );
}