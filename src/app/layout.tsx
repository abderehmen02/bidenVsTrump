import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import { AppProvider } from "./providers";
import "bootstrap-icons/font/bootstrap-icons.css"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  

  return (
    <html lang="en">
   <body className="flex flex-col justify-center  items-center pt-16  bg-black w-full h-full">
    <AppProvider>{children}</AppProvider>
    </body>
    </html>
  );
}
