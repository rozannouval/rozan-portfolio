import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";

const Projects = () => {
  return (
    <>
      <Head>
        <title>🌟 Rozan | Projects 🌟</title>
        <meta name="description" content="Projects Rozan Nouval" />
      </Head>
      <main className="flex flex-col w-full items-center justify-center text-light min-h-screen">
        <Layout className="pt-0 xl:container lg:mx-auto">
          <AnimatedText text={"My Projects"} />
          <div className="">
            
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Projects;
