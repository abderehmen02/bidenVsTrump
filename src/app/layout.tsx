import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import { AppProvider } from "./providers";
import "bootstrap-icons/font/bootstrap-icons.css"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Spudz For Prezident",
  description: "Tap to vote",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  

  return (
    <html lang="en">
   <body style={{height : "100svh"}} className="flex flex-col justify-stretch   relative  items-center pb-0 lg:pt-2 pt-1 bg-black w-full ">
    <AppProvider>{children}</AppProvider>
    </body>
    </html>
  );
}
