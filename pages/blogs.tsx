import React from "react";
import Head from "next/head";
import { BlogList } from "src/components/common/config";
import Footer from "src/components/footer/Footer";
import Header from "src/components/header/Header";
import CTASection from "@/src/modules/home/CTASection";
import BlogsGrid from "@/src/modules/Blogs/BlogsGrid";

export const getStaticProps = async () => {
  const resulting = await fetch(
    "https://strapi-cms.engagespot.co/api/blog-articles"
  );
  const result = await resulting.json();
  return {
    props: {
      blogs: result.data,
    },
  };
};

type Blog = {
  id: number;
  title: string;
  content: string;
  publishedAt: string;
  seo_url: string;
};

type Props = {
  blogs: Blog[];
};

const Blogs = ({ blogs }: Props) => {
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
        {/* <BlogsGrid blogs={blogs} /> */}
        <CTASection />
        <Footer />
      </main>
    </>
  );
};

export default Blogs;
