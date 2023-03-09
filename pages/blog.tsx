import Footer from "@/src/components/footer/Footer";
import Header from "@/src/components/header/Header";
import Blogintro from "@/src/modules/Blogs/Blogintro";
import BlogsGrid from "@/src/modules/Blogs/BlogsGrid";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

interface BlogArticle {
  id: number;
  attributes: {
    title: string;
    content: string;
   
  };
}
export const getStaticProps = async () => {
  const resulting = await fetch(
    "https://strapi-cms.engagespot.co/api/blog-articles"
  );
  const result = await resulting.json();
  return {
    props: {
      result: result.data,
    },
  };
};

export default function Blog({ result }: { result: BlogArticle[] }) {
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
        <Blogintro />
        {/* <BlogsGrid /> */}
        <div className="lg:grid lg:grid-flow-row lg:grid-cols-2 2xl:grid-cols- sm:grid-cols-1 sm:grid md:grid-cols-2 lg:gap-6 flex flex-col gap-4 px-6 w-full lg:px-6 xl:px-28 2xl:px-40 2xl:gap-12 mt-5 ">

       
        {result.map((result) => {
          return (
            <div key={result.id} className="flex flex-col justify-center items-start gap-3  rounded-3xl bg-[#151516]  hover:animate-none ">
              <Link href={`/blog/${result.id}`}>
                <h2 className="text-white text-2xl lg:text-3xl 2xl:text-4xl font-semibold tracking-wide p-6 px-14 hover:text-[#aa4875]">{result.attributes.title}</h2>
                {/* <p>{result.attributes.content}</p> */}
                <h5 className="text-sm text-white px-14 pb-4">Read more</h5>

              </Link>
            </div>
          );
        })} </div>
        <Footer />
      </main>
    </>
  );
}
