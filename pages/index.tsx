import Button from "@/components/Button";
import Head from "next/head";
import { useEffect } from "react";
import KUTE from "kute.js";
import Header from "@/components/Header";
import Home from "@/components/Home";
import About from "@/components/About";

export default function Index() {
  // useEffect(() => {
  //   const tween = KUTE.fromTo(
  //     "#blob1", // selector for first blob
  //     { path: "#blob1" }, // from state
  //     { path: "#blob2" }, // to state
  //     { repeat: 999, duration: 2000, yoyo: true } // options
  //   );
  //   tween.start();
  // }, []);

  return (
    <>
      <Head>
        <title>{"{El-Black}"}</title>
        <meta
          name="description"
          content="A Portfolio for Youssef Aboalata (Full-Stack Web Engineer)"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/logos/dark-logo.png" />
      </Head>
      <main>
        <Header />
        <Home />
        <About />
      </main>
    </>
  );
}
