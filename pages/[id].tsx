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
  data: {
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
    path: result.data.map((result: any) => ({
      params: { id: result.id.toString() },
    })),
    fallback: false,
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
  const markdownWithMeta = await res.json();
  const parsedMarkdown = fm(markdownWithMeta.data.attributes.draft);
  const htmlString = marked(parsedMarkdown.body);
  const image = markdownWithMeta.data.attributes.imageUrl;

  return {
    props: {
        res,
      image,
      htmlString,
      data: parsedMarkdown.attributes,
    },
  };
};

export default function BlogPost({ data, htmlString }: BlogPostProps) {
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

      <main className="bg-black sm:pt-8">
        <Header />
        <h1>{data.title}</h1>
        <p>{data.content}</p>

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
