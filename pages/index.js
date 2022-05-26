import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import Header from "../components/Header";
import Main from "../components/Main.js"


export default function Home() {
  return (
    <div className="h-full min-h-screen max-h-screen w-screen bg-[#2d242f] text-white select-none flex flex-col justify-between">
      <Header />
      <Main />
      <h1></h1>    
     
    </div>
  );
}
