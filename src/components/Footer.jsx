import React from "react";
import Layout from "./Layout";
import Link from "next/link";

  const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-light text-light font-medium">
      <Layout className="py-4 md:py-8 flex flex-col md:flex-row items-center justify-between text-sm md:text-base">
        <span>{new Date().getFullYear()} &copy; All Rights Reversed.</span>
        <div className="flex items-center ">
          Build With{" "}
          by&nbsp;<Link href={"/"} className="underline-offset-2 underline" target="_blank">Rozan Nouval</Link>
        </div>
        
      </Layout>
    </footer>
  );
};

export default Footer;
