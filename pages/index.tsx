import Head from "next/head";
import Header from "@/components/Header";
import Home from "@/components/Home";
import About from "@/components/About";
import Skills from "@/components/Skills";

export default function Index() {
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
        <Skills />
      </main>
    </>
  );
}
