import React from "react";
import Head from "next/head";
import Footer from "src/components/footer/Footer";
import Header from "src/components/header/Header";
import IntegrationPage from "@/src/modules/Integrations/IntergrationPage";
import ProvidersGrid from "@/src/modules/Integrations/ProvidersGrid";

type Props = {};

const Integrations = (props: Props) => {
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
        <IntegrationPage/>
        <ProvidersGrid/>
        <Footer />
      </main>
    </>
  );
};
export default Integrations;
