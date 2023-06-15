import Link from "next/link";
import React, { useState } from "react";
import Logo from "./Logo";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import {
  DribbbleIcon,
  TwitterIcon,
  GithubIcon,
  LinkedInIcon,
  PinterestIcon,
  SunIcon,
  MoonIcon,
} from "./Icons";
import useThemeSwitcher from "./hooks/useThemeSwitcher";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();

  return (
    <Link
      href={href}
      className={`${className} relative group font-medium text-lg`}
    >
      {title}
      <span
        className={`h-[1px] inline-block bg-[#37B6EF] absolute 
        left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300
        ${router.asPath === href ? "w-full" : "w-0"} dark:bg-[#015249]`}
      >
        &nbsp;
      </span>
    </Link>
  );
};
const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();

  const handleClick = () => {
    toggle();
    router.push(href);
  };

  return (
    <button
      onClick={handleClick}
      href={href}
      className={`${className} relative group font-medium text-lg dark:text-[#015249] my-2`}
    >
      {title}
      <span
        className={`h-[1px] inline-block bg-[#19405F] absolute 
        left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300
        ${router.asPath === href ? "w-full" : "w-0"} dark:bg-[#A5A5AF]`}
      >
        &nbsp;
      </span>
    </button>
  );
};

const NavBar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className="w-full px-32 py-8 font-medium flex items-center justify-between
    dark:text-[#015249] relative z-10 lg:px-16 md:px-12 sm:px-8"
    >
      <button
        onClick={handleClick}
        className="flex-col justify-center items-center hidden lg:flex"
      >
        <span
          className={`bg-[#19405F] dark:bg-dark block h-0.5 w-6 rounded-sm
           ${
             isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
           } transition-all duration-500 ease-in-out`}
        ></span>
        <span
          className={`bg-[#19405F] dark:bg-dark block h-0.5 w-6 rounded-sm
          my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          } transition-all duration-500 ease-in-out`}
        ></span>
        <span
          className={`bg-[#19405F] dark:bg-dark block h-0.5 w-6 rounded-sm
          ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          } transition-all duration-500 ease-in-out`}
        ></span>
      </button>

      <div className="w-full flex justify-between items-center lg:hidden">
        <nav>
          <CustomLink href="/" title="Home" className="mr-4" />
          <CustomLink href="/about" title="About" className="mx-4" />
          <CustomLink href="/projects" title="Projects" className="mx-4" />
          <CustomLink href="/articles" title="Articles" className="ml-4" />
        </nav>

        <nav className="flex items-center justify-center flex-wrap">
          <motion.a
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-5 mr-3"
            href="https://linkedin.com"
            target={"_blank"}
          >
            <LinkedInIcon />
          </motion.a>
          <motion.a
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-5 mx-3"
            href="https://github.com/defview"
            target={"_blank"}
          >
            <GithubIcon />
          </motion.a>
          <motion.a
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-5 mx-3"
            href="https://twitter.com/Juxt_chillin"
            target={"_blank"}
          >
            <TwitterIcon />
          </motion.a>
          <motion.a
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-5 mx-3"
            href="https://dribble.com"
            target={"_blank"}
          >
            <DribbbleIcon />
          </motion.a>
          <motion.a
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-5 ml-3 bg-light rounded-full"
            href="https://pinterest.com"
            target={"_blank"}
          >
            <PinterestIcon />
          </motion.a>
          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={`ml-3 flex items-center justify-center rounded-full p-1
          ${
            mode === "light"
              ? "text-yellow-500 bg-[#77C9D4]"
              : "bg-transparent text-[#77C9D4]"
          })`}
          >
            {mode === "dark" ? (
              <SunIcon className={"fiil-dark"} />
            ) : (
              <MoonIcon className={"fill-dark"} />
            )}
          </button>
        </nav>
      </div>

      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="min-w-[70vw] flex justify-between items-center flex-col z-30
    fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
    bg-[#19405F]/90 dark:bg-[#A5A5AF]/80 rounded-lg backdrop-blur-md py-32"
        >
          <nav className="flex items-center flex-col justify-center">
            <CustomMobileLink
              href="/"
              title="Home"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/about"
              title="About"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/projects"
              title="Projects"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/articles"
              title="Articles"
              className=""
              toggle={handleClick}
            />
          </nav>

          <nav className="flex items-center justify-center flex-wrap mt-2">
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-5 mr-3 sm:mx-1"
              href="https://linkedin.com"
              target={"_blank"}
            >
              <LinkedInIcon />
            </motion.a>
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-5 mx-3 sm:mx-1"
              href="https://github.com/defview"
              target={"_blank"}
            >
              <GithubIcon />
            </motion.a>
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-5 mx-3 sm:mx-1"
              href="https://twitter.com/Juxt_chillin"
              target={"_blank"}
            >
              <TwitterIcon />
            </motion.a>
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-5 mx-3 sm:mx-1"
              href="https://dribble.com"
              target={"_blank"}
            >
              <DribbbleIcon />
            </motion.a>
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-5 ml-3 bg-light rounded-full sm:mx-1"
              href="https://pinterest.com"
              target={"_blank"}
            >
              <PinterestIcon />
            </motion.a>
            <button
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
              className={`ml-3 flex items-center justify-center rounded-full p-1
        ${
          mode === "light"
            ? "text-yellow-500 bg-[#77C9D4]"
            : "bg-transparent text-[#77C9D4]"
        })`}
            >
              {mode === "dark" ? (
                <SunIcon className={"fiil-dark"} />
              ) : (
                <MoonIcon className={"fill-dark"} />
              )}
            </button>
          </nav>
        </motion.div>
      ) : null}

      <div className="absolute left-[50%] top-2 -translate-x-[50%]">
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;
