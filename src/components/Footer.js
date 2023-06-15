import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      className="w-full border-t-2 border-solid border-[#19405F] dark:border-[#A5A5AF] font-medium
    text-lg sm:text-base"
    >
      <Layout className="py-8 flex items-center justify-between lg:flex-col lg:py-6">
        <span className="dark:text-[#015249]">{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className="flex items-center dark:text-[#015249] lg:py-2">
          Build With <span className="text-primary dark:text-white text-2xl px-1 cursor-pointer">&#9825;</span>
          by&nbsp;
          <Link
            href="https://linkein.com"
            className="border-b-2 border-[#37B6EF] dark:border-[#015249] dark:text-[#015249]"
          >Folafemi Alexander</Link>
        </div>
        <Link
          href="https://linkein.com"
          target={"_blank"}
          className="border-b-2 border-[#19405F] dark:border-[#015249] dark:text-[#015249]"
        >
          Say hello
        </Link>
      </Layout>
    </footer>
  );
};

export default Footer;
