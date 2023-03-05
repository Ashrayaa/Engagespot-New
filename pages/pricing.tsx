import React from "react";
import Head from "next/head";
import Footer from "src/components/footer/Footer";
import Header from "src/components/header/Header";
import dynamic from "next/dynamic";
import PayAsYouGo from "@/src/modules/Pricing/PayAsYouGo";
import PayAhead from "@/src/modules/Pricing/PayAhead";
import Pricingintro from "@/src/modules/Pricing/Pricingintro";

type Props = {};
// const PayAsYouGo = dynamic(() => import("@/src/modules/Pricing/payasyougo"));
// const PayAhead = dynamic(() => import("@/src/modules/Pricing/PayAhead"));

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
        <Pricingintro/>
        <PayAsYouGo/>
        <PayAhead/>
        <Footer />
      </main>
    </>
  );
};
export default Pricing;
