import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import React from "react";

const articles = () => {
  return (
    <>
      <Head>
        <title>🌟 Rozan | Articles 🌟</title>
        <meta name="description" content="Articles Rozan Nouval" />
      </Head>

      <main className="min-h-screen flex flex-col justify-center">
        <Layout className="pt-0 xl:container lg:mx-auto">
          <AnimatedText text={"My Articles"} />
        </Layout>
      </main>
    </>
  );
};

export default articles;
