import React from "react";
import Head from "next/head";

import Footer from "src/components/footer/Footer";
import Header from "src/components/header/Header";
import AboutUsIntro from "@/src/modules/Aboutus/AboutUsIntro";
import AboutUsDetail from "@/src/modules/Aboutus/AboutUsDetail";
import OurValues from "@/src/modules/Aboutus/OurValues";

type Props = {};

const AboutUs = (props: Props) => {
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
      <main className="bg-black sm:pt-8">
        <Header />
        <AboutUsIntro />
        <AboutUsDetail />
        <OurValues />
        <Footer />
      </main>
    </>
  );
};
export default AboutUs;
