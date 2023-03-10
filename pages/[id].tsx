export {}

import React from "react";
import Head from "next/head";
import Image from "next/image";
import { marked } from "marked";
import fm from "front-matter";
import Header from "@/src/components/header/Header";
import Footer from "@/src/components/footer/Footer";

interface BlogPostProps {
  image: string;
  htmlString: string;
  post: {
    [x: string]: any;
    title: string;
    content: string;
  };
  id: string;
  attributes: {
    title: string;
    content: string;
  };
}

export const getStaticPaths = async () => {
  const response = await fetch(
    "https://strapi-cms.engagespot.co/api/blog-articles"
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
    `https://strapi-cms.engagespot.co/api/blog-articles/${params.id}`
  );
  if (res.status === 404) {
    return { notFound: true };
  }
  //  const result = await res.json();

  //   const markdownWithMeta = await res.json();
  //   const parsedMarkdown = fm(markdownWithMeta.data.attributes.draft);
  //   const htmlString = marked(parsedMarkdown.body);
  //   const image = markdownWithMeta.data.attributes.imageUrl;

  const post = await res.json();
  const parsedMarkdown = fm(post.content);
  const htmlString = marked(parsedMarkdown.body);
  const image = post.image.url;

  return {
    props: {
      //markdownWithMeta,
      image,
      htmlString,
      data: parsedMarkdown.attributes,
    },
  };
};

export default function BlogPost({ post, image, htmlString }: BlogPostProps) {
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
            <h1 className="text-white text-center font-semibold text-4xl px-3 sm:text-4xl sm:px-14 md:text-5xl lg:text-6xl xl:font-bold xl:text-7xl xl:px-80 xl:leading-tight">
              {post.attributes.title}
            </h1>{" "}
            <p className="text-[#C0C0C8] text-xs lg:text-sm xl:text-xl px-5 sm:px-32 md:px-36 lg:px-44 xl:px-[310px]  2xl:font-semibold text-center shadow-2xl opacity-90">
              {post.attributes.content}
            </p>
          </div>
        </div>

        {/* <h1>{result.attributes.title}</h1>
        <p>{result.attributes.content}</p> */}

        <div>
          {/* <Image
              src={image}
              alt="blog-post"
              priority={true}
              className="rounded-full"
              width={600}
              height={400}
            /> */}
          <div dangerouslySetInnerHTML={{ __html: htmlString }} />
        </div>

        <Footer />
      </main>
    </>
  );
}
