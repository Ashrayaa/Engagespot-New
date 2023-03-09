import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Footer from "src/components/footer/Footer";
import Header from "src/components/header/Header";

export const getStaticPaths = async () => {
  const resulting = await fetch(
    "https://strapi-cms.engagespot.co/api/blog-articles"
  );
  const blogs = await resulting.json();

  const paths = blogs.data.map((blog: any) => ({
    params: { slug: blog.attributes.seo_url },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }: any) => {
  const resulting = await fetch(
    `https://strapi-cms.engagespot.co/api/blog-articles?seo_url=${params.slug}`
  );
  const result = await resulting.json();

  return {
    props: {
      blog: result.data[0],
    },
  };
};

type Props = {
  blog: {
    id: number;
    title: string;
    content: string;
    publishedAt: string;
  };
};

const Blog = ({ blog }: Props) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Head>
        <title>{blog.title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Logo.png" />
      </Head>
      <main className="bg-black sm:pt-8">
        <Header />
        {/* <BlogPost blog={blog} /> */}
        <Footer />
      </main>
    </>
  );
};

export default Blog;
