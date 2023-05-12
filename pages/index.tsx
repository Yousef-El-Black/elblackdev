import Head from "next/head";
import Header from "@/components/Header";
import Home from "@/components/Home";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Gallery from "@/components/Gallery";
import Preloader from "@/components/Preloader";
import Testimonials from "@/components/Testimonials";

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
        <Preloader />
        <Header />
        <Home />
        <About />
        <Skills />
        <Gallery />
        <Testimonials />
      </main>
    </>
  );
}
