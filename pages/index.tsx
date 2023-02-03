import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "./components/Header";
import Introduction from "./components/Home/Introduction";
import Zapier from "./components/Home/Zapier";
import Features from "./components/Home/Features";
import Fordevelopers from "./components/Home/Fordevelopers";
import CommunicationLayer from "./components/Home/CommunicationLayer";
import Testimonials from "./components/Home/Testimonials";
import GetStarted from "./components/Home/GetStarted";
import Footer from "./components/Footer";
import { useRouter } from 'next/router'

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Engagespot</title>
        <meta
          name="description"
          content="Notification infrastructure platform for developers"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Logo.png" />
      </Head>
      <main className="bg-black lg:bg-[#191818] xl:bg-gradient-to-tl from-[#0D0D0D] to-[#2b2a2a]">
        <Header />
        <Introduction />
        <Zapier />
        <Features />
        <Fordevelopers />
        <CommunicationLayer />
        <Testimonials />
        <GetStarted />
        <Footer />
      </main>
    </>
  );
}
