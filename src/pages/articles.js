import AnimatedText from "@/components/AnimatedText";
import Head from "next/head";
import Layout from "@/components/Layout";
import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import article1 from "../../public/images/SC.png";
import article2 from "../../public/images/nill.png";
import { motion, useMotionValue } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const MovingImg = ({ title, img, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  function handleMouse(event) {
    imgRef.current.style.display = "inline-block";
    x.set(event.pageX);
    y.set(-10);
  }

  function handleMouseLeave(event) {
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  }

  return (
    <Link
      href={link}
      target="_blank"
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
    >
      <h2
        className="capitalize text-xl font-semibold hover:underline
        text-[#E2E8F0] dark:text-[#015249]"
      >
        {title}
      </h2>
      <FramerImage
        style={{ x: x, y: y }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, tarnsition: { duration: 0.2 } }}
        ref={imgRef}
        src={img}
        alt={title}
        className="w-96 h-auto hidden absolute
      rounded-lg z-10 md:!hidden"
      />
    </Link>
  );
};

const Article = ({ img, title, date, link }) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      viewport={{ once: true }}
      className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center
    justify-between bg-[#19405F] first:mt-0 border border-solid
    border-transparent border-r-4 border-b-4 border-b-[#37B6EF] border-r-[#37B6EF]
    dark:bg-gradient-to-r from-[#77C9D4] to-[#57BC90] dark:border-b-[#015249]
    dark:border-r-[#015249] sm:flex-col"
    >
      <MovingImg title={title} img={img} link={link} />
      <span
        className="text-[#37B6EF] dark:text-[#015249] font-semibold pl-4
      sm:self-start sm:pl-0 xs:text-sm"
      >
        {date}
      </span>
    </motion.li>
  );
};

const Featuredarticle = ({ img, title, time, summary, link }) => {
  return (
    <li
      className="col-span-1 w-full p-4 bg-[#19405F] border
    border-solid border-transparent shadow-2xl rounded-2xl relative
    dark:bg-gradient-to-r from-[#77C9D4] to-[#57BC90]"
    >
      <div
        className="absolute top-0 -right-4 -z-10 w-[101%] h-[103%] rounded-[2.5rem]
                bg-[#37B6EF] rounded-br-3xl dark:bg-[#015249]"
      />

      <Link
        href={link}
        target="_blank"
        className="w-full inline-block cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>
      <Link href={link} target="_blank">
        <h2
          className="capitalize text-2xl font-bold my-2 
        text-[#37B6EF] hover:underline mt-4 dark:text-white
        xs:text-lg"
        >
          {title}
        </h2>
      </Link>
      <p className="text-base dark:text-[#015249] font-semibold mb-2">
        {summary}
      </p>
      <span className="text-[#37B6EF] font-semibold dark:text-white">
        {time}
      </span>
    </li>
  );
};

const articles = () => {
  return (
    <>
      <Head>
        <title>FolaAlex | Articles Page</title>
        <meta name="description" content="any description" />
      </Head>

      <TransitionEffect />
      <main
        className="w-full mb-16 flex flex-col items-center justify-center
      overflow-hidden"
      >
        <Layout className="pt-16">
          <AnimatedText
            text="Words can Change the World!"
            className="mb-16 text-[#E2E8F0] dark:!text-[#015249]
            lg:!text-7xl sm:mb-8 sm:!text-6xl xs:text-4xl"
          />
          <ul
            className="grid grid-cols-2 gap-16 md:grid-cols-1 lg:gap-8
          md:gap-y-16"
          >
            <Featuredarticle
              title="Build A Skincare E-Commerce Project In Reactjs From Scratch"
              summary="Learn how to use React hooks, modern TailwindCSS techniques, framer motion, and other functionalities. 
              Utilizing Swiper.js to enhance the site's fuctionality and incorperating sliders in your React js Project."
              time="9 min read"
              link="/"
              img={article1}
            />

            <Featuredarticle
              title="Build A 3D Animated And Flip Card Effect using TailwindCSS And Framer Motion"
              summary="Learn how to build 3D animated card and flip card in ReactJS using Tailwind and Framer Motion. 
              Taking the guidelines you would be a to Incorporate various Framer motion animations into your React Project"
              time="9 min read"
              link="/"
              img={article2}
            />
          </ul>
          <h2 className="font-bold text-[#E2E8F0] dark:text-[#015249] text-6xl w-full text-center my-16 mt-32">
            All Articles
          </h2>
          <ul>
            <Article
              title="Build A 3D Animated And Flip Card Effect using TailwindCSS And Framer Motion"
              date="May 23, 2023"
              link="/"
              img={article2}
            />
            <Article
              title="Build A 3D Animated And Flip Card Effect using TailwindCSS And Framer Motion"
              date="May 23, 2023"
              link="/"
              img={article2}
            />
            <Article
              title="Build A 3D Animated And Flip Card Effect using TailwindCSS And Framer Motion"
              date="May 23, 2023"
              link="/"
              img={article2}
            />
            <Article
              title="Build A 3D Animated And Flip Card Effect using TailwindCSS And Framer Motion"
              date="May 23, 2023"
              link="/"
              img={article2}
            />
            <Article
              title="Build A 3D Animated And Flip Card Effect using TailwindCSS And Framer Motion"
              date="May 23, 2023"
              link="/"
              img={article2}
            />
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default articles;
