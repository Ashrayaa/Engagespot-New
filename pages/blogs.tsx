import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { BlogList } from "src/components/common/config";
import Footer from "src/components/footer/Footer";
import Header from "src/components/header/Header";
import CTASection from "@/src/modules/home/CTASection";
import Blogintro from "@/src/modules/Blogs/Blogintro";
import BlogsGrid from "@/src/modules/Blogs/BlogsGrid";
import Newsletter from "@/src/components/common/Newsletter";

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

type Result = {
  id: number;
  attributes: {
    imageUrl: any;
    title: string;
    content: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    seo_url: string;
  };
};

type Props = {
  result: Result[];
};


const Blogs = ({ result }: Props) => {
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
        <Blogintro />
        <div className="xl:mt-32 mt-16">
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-[#E7E3E3] text-3xl lg:text-4xl xl:text-5xl xl:px-44 px-3 tracking-wide mb-4 text-center font-semibold">
              Latest posts{" "}
            </h2>

            <div className="lg:grid lg:grid-flow-row lg:grid-cols-2 2xl:grid-cols- sm:grid-cols-1 sm:grid md:grid-cols-2 lg:gap-6 flex flex-col gap-4 px-6 w-full lg:px-6 xl:px-28 2xl:px-40 2xl:gap-12 mt-5 ">
              <div className="flex flex-col justify-center items-start gap-3   rounded-3xl bg-[#151516]  hover:animate-none ">
                {result && result.map((data: Result) => {
                  return (
                    // eslint-disable-next-line react/jsx-key
                    <div>
                      <Link href={`/blog/${data.id}`}>
                        {/* <Image
                          className="rounded-t-3xl"
                          src={`${data.attributes.imageUrl}`}
                          alt="blog-post"
                          priority={true}
                          width={300}
                          height={300}
                        /> */}
                        <h2 className="text-white text-2xl lg:text-3xl 2xl:text-4xl font-semibold tracking-wide p-6 px-14 hover:text-[#aa4875]">
                          {data.attributes.title}
                        </h2>

                        <h5 className="text-sm text-white px-14 pb-4">
                          Read more
                        </h5>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
            <button className="mt-10 rounded-full font-semibold p-4 xl:px-8 xl:text-2xl bg-white hover:bg-[#aa4875] text-[#0D0D0E] hover:text-white transition duration-300 transform hover:scale-110">
              Next
            </button>
          </div>
        </div>
        <Newsletter />
        <Footer />
      </main>
    </>
  );
};
export default Blogs;
