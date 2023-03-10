import React from "react";
import Head from "next/head";
import Footer from "src/components/footer/Footer";
import Header from "src/components/header/Header";
import Pricingintro from "@/pages/Pricingintro";
import PayAsYouGo from "@/pages/PayAsYouGo";
import Payahead from "@/pages/Payahead";


type Props = {};

const pricingpage = (props: Props) => {
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
        <Pricingintro/>
        <PayAsYouGo/>
        <Payahead/>
      
        <Footer />
      </main>
    </>
  );
};
export default pricingpage;
