export {};

import React from "react";
import Head from "next/head";
import Image from "next/image";
import { marked } from "marked";
import fm from "front-matter";
import Header from "@/src/components/header/Header";
import Footer from "@/src/components/footer/Footer";
import { Buffer } from "buffer";

interface BlogPostProps {
  image: string;
  htmlString: string;
  data: {
    [x: string]: any;
    title: string;
    content: string;
  };
  id: string;
  attributes: {
    title: string;
    content: string;
  };
  title: string;
}

export const getStaticPaths = async () => {
  const response = await fetch(
    "https://strapi-cms.engagespot.co/api/blog-articles?populate=featured_image"
  );
  const result = await response.json();
  return {
    paths: result.data.map((result: any) => ({
      params: { id: result.id.toString() },
    })),

    fallback: "blocking",
  };
};

export const getStaticProps = async ({
  params,
}: {
  params: { id: string };
}) => {
  const res = await fetch(
    `https://strapi-cms.engagespot.co/api/blog-articles/${params.id}?populate=featured_image`
  );
  if (res.status === 404) {
    return { notFound: true };
  }

  
  const markdownWithMeta = await res.json();
  const title = fm(markdownWithMeta?.data?.attributes?.title || "");
  const parsedMarkdown = fm(markdownWithMeta?.data?.attributes?.content || "");
  const regex = /\n\n+/g;
  const modifiedMarkdown = parsedMarkdown.body.replace(regex, "\n");
  const htmlString = marked(modifiedMarkdown);
  
 // result.attributes.featured_image.url
  const image = (markdownWithMeta?.data?.attributes?.featured_image?.url|| "");
  console.log(image);

  return {
    props: {
      image,
      htmlString,
      data: parsedMarkdown.attributes,
      id: params.id,
      attributes: markdownWithMeta?.data?.attributes || {},
    },
  };
};

export default function BlogPost({
  attributes,
  image,
  data,
  htmlString,
}: BlogPostProps) {
  return (
    <>
      <Head>
        <title>Engagespot</title>
        <meta
          name="description"
          content="Notification infrastructure platform for developers"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className="bg-black sm:pt-8 text-white">
        <Header />
        <div className="lg:px-6 flex flex-col justify-center items-center mt-10 xl:mt-20">
          <div className="flex flex-col justify-center items-center gap-2 sm:gap-4">
            <h1 className="text-white text-center font-semibold text-4xl px-3 sm:text-4xl sm:px-14 md:text-5xl lg:text-6xl xl:font-bold xl:px-72 xl:leading-tight">
              {attributes.title}
            </h1>
            <div>
          
              {image && (
                <Image
                  src={image}
                  alt="blog-post"
                  priority={true}
                  className=""
                  width={600}
                  height={400}
                />
              )}
            </div>
            <div className="bg-white md:px-14 lg: rounded-3xl p-8 mt-8 lg:mt-12 text-black w-[335px] sm:w-[550px] md:w-[650px] lg:w-[850px] xl:w-[1000px]">
              <div
                dangerouslySetInnerHTML={{ __html: htmlString }}
                className="prose flex flex-col overflow-hidden gap-5 font-medium text-black"
              />
            </div>
          </div>
        </div>

        <Footer />
      </main>
    </>
  );
}
