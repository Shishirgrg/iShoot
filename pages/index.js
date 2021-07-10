import Head from "next/head";
import Banner from "../components/Banner";
import About from "../components/About";
import Developer from "../components/Developer";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>iShoot</title>
      </Head>
      <Banner />
      <About />
      <Developer />
      <Footer />
    </>
  );
}
