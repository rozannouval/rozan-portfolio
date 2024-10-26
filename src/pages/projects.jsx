import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  const myProjects = [
    {
      title: "Portfolio V1",
      description: "Website ini dibuat menggunakan html, css dan js",
      image: "portfolio-v1.png",
      link: "https://rozan-portfolio-1.netlify.app/",
    },
    {
      title: "Google Company",
      description: "Website ini dibuat menggunakan html, css dan js",
      image: "google-company.png",
      link: "https://google-company.vercel.app/",
    },
    {
      title: "To-Do List",
      description: "Website ini dibuat menggunakan next.js versi 13",
      image: "todo-list.png",
      link: "https://to-do-list-rzn.vercel.app/",
    },
    {
      title: "Daftar Anime Ku",
      description: "Website ini dibuat menggunakan next.js 13 dan API",
      image: "daftaranimeku.png",
      link: "https://daftar-anime-ku.vercel.app/",
    },
    {
      title: "SMK Yadika Soreang",
      description:
        "Website ini dibuat menggunakan next.js 14 dan ini merupakan clone",
      image: "smk-yadika-soreang.png",
      link: "https://smkyadikasoreang.netlify.app/",
    },
  ];

  return (
    <>
      <Head>
        <title>🌟 Rozan | Projects 🌟</title>
        <meta name="description" content="Projects Rozan Nouval" />
      </Head>
      <main className="flex flex-col w-full items-center justify-center text-light min-h-screen">
        <Layout className="pt-0 xl:container lg:mx-auto">
          <AnimatedText text={"My Projects"} />
          <div className="my-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {myProjects.map((item, index) => (
              <a
                href={item.link}
                key={index}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-light transition-all duration-300 hover:bg-light/20 rounded-lg "
              >
                <Image
                  src={`/images/projects/${item.image}`}
                  alt={item.title}
                  width={350}
                  height={175}
                  className="rounded-md w-full"
                />
                <div className="w-full px-2 mt-6 mb-2">
                  <hr className="w-full border border-light" />
                </div>
                <div className="p-2">
                  <h1 className="font-bold text-2xl mb-4">{item.title}</h1>
                  <p>{item.description}</p>
                  <div className="flex justify-end mt-2">
                    <FaExternalLinkAlt />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Projects;
