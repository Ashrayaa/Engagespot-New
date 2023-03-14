import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "../src/components/header/Header";
import Introduction from "../src/modules/home/Introduction";
import Zapier from "../src/modules/home/Zapier";
import Features from "../src/modules/home/Featureslist";
import Fordevelopers from "../src/modules/home/Chooselanguage";
import CommunicationLayer from "../src/modules/home/CommunicationLayer";
import Testimonials from "../src/modules/home/Testimonials";
import GetStarted from "../src/modules/home/GetStarted";
import Footer from "../src/components/footer/Footer";
import { useRouter } from "next/router";
import Blog from "../src/modules/home/Blog";
import CTASection from "../src/modules/home/CTASection";
import Newsletter from "@/src/components/common/Newsletter";


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
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main className="bg-black sm:pt-8 antialiased">
        <Header />
        <Introduction />
        <Zapier />
        <Features />
        <Fordevelopers />
        <Testimonials />
        <Blog />
        <CTASection />
        <Footer />
      </main>
    </>
  );
}
