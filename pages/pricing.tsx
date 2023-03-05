import React from "react";
import Head from "next/head";
import Footer from "src/components/footer/Footer";
import Header from "src/components/header/Header";

import PayAsYouGo from "@/src/modules/Pricing/PayAsYouGo";
import Payahead from "@/src/modules/Pricing/PayAhead";


type Props = {};

const Pricing = (props: Props) => {
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
        
        <PayAsYouGo/>
        <Payahead/>
      
        <Footer />
      </main>
    </>
  );
};
export default Pricing;
