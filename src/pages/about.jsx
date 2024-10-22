import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import React, { useEffect, useRef, useState } from "react";
import Profile2 from "../../public/images/profile/rozan-pp2.png";
import Image from "next/image";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/Skills";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed();
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const About = () => {
  const [isTranslated, setIsTranslated] = useState(false);

  const toggleTranslate = () => {
    setIsTranslated((prev) => !prev);
  };

  const description = isTranslated
    ? "Rozan Nouval adalah seorang siswa berusia 17 tahun dari Bandung, Jawa Barat, yang memiliki minat mendalam terhadap dunia teknologi yang terus berkembang. Ia fokus pada pengembangan perangkat lunak dan pengembangan web, di mana ia secara konsisten mengasah keterampilannya dan memperluas pengetahuannya. Dengan rasa ingin tahu yang tinggi, Rozan aktif terlibat dalam berbagai proyek coding dan selalu mengikuti tren terbaru dalam teknologi. Selain pendidikan, ia juga memiliki hobi seperti bermain game, coding, dan menonton anime, yang semakin meningkatkan kreativitas dan kemampuan pemecahan masalahnya."
    : "17-year-old Rozan Nouval is a student from Bandung, West Java, Indonesia, who has a strong interest in the rapidly expanding field of technology. He focuses especially on software engineering and web development, where he constantly learns new things and hones his craft. Rozan has a natural desire for learning and actively participates in a variety of coding projects. He also keeps up with the most recent advancements in technology. Beyond academics, he has hobbies like gaming, coding, and anime viewing, all of which enhance his creative and problem-solving skills.";

  return (
    <>
      <Head>
        <title>🌟 Rozan | About 🌟</title>
        <meta name="description" content="About Rozan Nouval" />
      </Head>
      <main className="flex flex-col w-full items-center justify-center text-light min-h-screen">
        <Layout className="pt-0 xl:container lg:mx-auto">
          <AnimatedText
            text="Who am I?"
            className="!text-5xl text-center mb-16 mt-8"
          />
          <div className="flex flex-col-reverse text-center lg:text-start xl:flex-row justify-between w-full mb-16 gap-8 lg:gap-16">
            <div className="flex flex-col items-center lg:items-start justify-center lg:justify-start text-light/75">
              <h2 className="mb-4 lg:mt-4 text-3xl font-bold uppercase">
                Profile
              </h2>
              <div className="font-medium space-y-1">
                <p className="font-medium text-lg text-justify">
                  {description}
                </p>
              </div>
              <div className="flex justify-center xl:justify-end w-full">
                <button
                  onClick={toggleTranslate}
                  className="mt-8 lg:mt-4 px-4 py-2 border border-white bg-gray-100 text-gray-900 font-semibold hover:bg-gray-900 hover:text-gray-100 transition-all duration-300 rounded text-right"
                >
                  {isTranslated
                    ? "Translate to English"
                    : "Translate to Indonesian"}
                </button>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative h-max rounded-2xl border-2 border-solid border-light bg-dark p-8 flex justify-center">
                <div className="w-80 h-auto">
                  <Image
                    src={Profile2}
                    alt="Profile"
                    className="w-full h-auto rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 text-center w-full gap-4">
            <div className="flex flex-col items-center justify-center rounded-xl px-4 py-2 gap-4">
              <span className="inline-block text-4xl font-bold ">
                <AnimatedNumbers value={3} />+
              </span>
              <h2 className="text-base font-medium capitalize text-light/75">
                Satisfied Clients
              </h2>
            </div>

            <div className="flex flex-col items-center justify-center rounded-xl px-4 py-2 gap-4">
              <span className="inline-block text-4xl font-bold ">
                <AnimatedNumbers value={5} />+
              </span>
              <h2 className="text-base font-medium capitalize text-light/75">
                Projects Completed
              </h2>
            </div>

            <div className="flex flex-col items-center justify-center rounded-xl px-4 py-2 gap-4">
              <span className="inline-block text-4xl font-bold ">
                <AnimatedNumbers value={1} />
              </span>
              <h2 className="text-base font-medium capitalize text-light/75">
                Month Of Experience
              </h2>
            </div>
          </div>

          <Skills className="my-16" />
        </Layout>
      </main>
    </>
  );
};

export default About;
