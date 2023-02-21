import React from "react";
import Head from "next/head";

import Footer from "src/components/footer/Footer";
import Header from "src/components/header/Header";
import Build from "src/components/common/Build";
import Integration_intro from "src/modules/Integrations/Integration_intro";
import Integration_body from "src/modules/Integrations/Integration_body";
//import Pricingintro from "src/modules/Pricing/Pricingintro";

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
      <main className="bg-black lg:bg-[#191818] xl:bg-gradient-to-tl from-[#0D0D0D] to-[#2b2a2a]">
        <Header />
        {/* <Pricingintro /> */}
        <Build />
        <Footer />
      </main>
    </>
  );
};
export default Pricing;
