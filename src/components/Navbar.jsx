import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const CustomLink = ({ href, title, className }) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`
          h-[1px] inline-block bg-light absolute left-0 -bottom-0.5 
          group-hover:w-full transition-all ease duration-300 
          ${router.asPath === href ? "w-full" : "w-0"}
        `}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const Navbar = () => {
  return (
    <header className="w-full md:px-28 py-8 mb-3 font-medium flex flex-col md:flex-row items-center justify-between xl:container mx-auto text-light">
      <nav className="space-x-8 mb-8 md:mb-0">
        <CustomLink href="/" title={"Home"} />
        <CustomLink href="/about" title={"About"} />
        <CustomLink href="/projects" title={"Projects"} />
        <CustomLink href="/articles" title={"Articles"} />
      </nav>

      <nav className="flex items-center justify-center flex-wrap gap-10">
        <motion.a
          href="https://github.com/rozannouval"
          target={"_blank"}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="relative group"
        >
          <FaGithub className="w-5 h-5" />
          <span className="absolute bottom-[-45px] left-1/2 transform -translate-x-1/2 bg-light text-dark text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            GitHub
            <span className="absolute top-[-5px] left-1/2 transform -translate-x-1/2 w-2.5 h-2.5 bg-light rotate-45"></span>
          </span>
        </motion.a>

        <motion.a
          href="https://instagram.com/rozannouvall"
          target={"_blank"}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="relative group"
        >
          <FaInstagram className="w-5 h-5" />
          <span className="absolute bottom-[-45px] left-1/2 transform -translate-x-1/2 bg-light text-dark text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Instagram
            <span className="absolute top-[-5px] left-1/2 transform -translate-x-1/2 w-2.5 h-2.5 bg-light rotate-45"></span>
          </span>
        </motion.a>

        <motion.a
          href="/"
          target={"_blank"}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="relative group"
        >
          <FaLinkedin className="w-5 h-5" />
          <span className="absolute bottom-[-45px] left-1/2 transform -translate-x-1/2 bg-light text-dark text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            LinkedIn
            <span className="absolute top-[-5px] left-1/2 transform -translate-x-1/2 w-2.5 h-2.5 bg-light rotate-45"></span>
          </span>
        </motion.a>
      </nav>

      <div className="absolute top-2 left-[50%] translate-x-[-50%]">
        {/* <Logo /> */}
      </div>
    </header>
  );
};

export default Navbar;
