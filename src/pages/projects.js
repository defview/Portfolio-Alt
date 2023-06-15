import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import project1 from "../../public/images/Linearbg.png";
import project2 from "../../public/images/pc.png"
import project3 from "../../public/images/DT.png"
import project4 from "../../public/images/CC.png"
import project5 from "../../public/images/AC.png"
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article
      className="w-full flex items-center justify-between rounded-3xl relative 
    border border-solid border-transparent bg-[#19405F] dark:bg-gradient-to-r 
    from-[#77C9D4] to-[#57BC90] text-[#667387] shadow-2xl p-12 rounded-br-2xl
    lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4"
    >
      <div
        className="absolute top-0 -right-4 -z-10 w-[101%] h-[103%] rounded-[2.5rem]
                bg-[#37B6EF] rounded-br-3xl dark:bg-[#015249] xs:-right-2 sm:h-[102%]
                xs:w-full xs:rounded-[1.5rem]"
      />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
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

      <div
        className="w-1/2 flex flex-col items-start justify-between
      pl-6 lg:w-full lg:pl-0 lg:pt-6"
      >
        <span
          className="text-[#E2E8F0] font-medium text-xl dark:text-[#015249]
        xs:text-base"
        >
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="mt-2 w-full text-left text-4xl text-[#37B6EF] dark:text-white font-bold sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-lg dark:text-[#015249] sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            {" "}
            <GithubIcon />{" "}
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded bg-dark p-2 px-6 text-lg font-semibold
          text-[#E2E8F0] hover:text-[#37B6EF] transition-all ease-in-out 
          duration-700 dark:bg-[#A5A5AF] dark:text-[#015249] sm:px-4 sm:text-base"
          >
            {" "}
            Check-out Project{" "}
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github }) => {
  return (
    <article
      className="w-full flex flex-col items-center justify-center rounded-2xl
    border border-solid border-transparent bg-[#19405F] shadow-2xl p-6
    relative dark:bg-gradient-to-r from-[#77C9D4] to-[#57BC90] xs:p-4"
    >
      <div
        className="absolute top-0 -right-2 -z-10 w-[101%] h-[103%] rounded-[2rem]
                bg-[#37B6EF] rounded-br-3xl dark:bg-[#015249] md:-right-2
                md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]"
      />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
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

      <div
        className="w-full flex flex-col items-start justify-between
      mt-4"
      >
        <span
          className="text-[#E2E8F0] dark:text-[#015249] font-medium text-xl
        lg:text-lg md:text-base"
        >
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2
            className="mt-2 w-full text-left text-3xl text-[#37B6EF] 
          dark:text-white font-bold lg:text-2xl"
          >
            {title}
          </h2>
        </Link>
        <div className="mt-2 w-full flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="text-lg font-semibold transition-all ease-in-out md:text-base 
            duration-700 hover:text-[#37B6EF] underline dark:text-[#015249]"
          >
            {" "}
            Check-out{" "}
          </Link>
          <Link href={github} target="_blank" className="w-8 md:w-6">
            <GithubIcon />{" "}
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>FolaAlex | Projects Page</title>
        <meta name="description" content="any description" />
      </Head>

      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="!text-[#E2E8F0] mb-16 dark:!text-[#015249] 
            lg:!text-7xl sm:mb-8 sm:!text-6xl xs:text-4xl"
          />

          <div
            className="grid grid-cols-12 gap-24 gap-y-32 cl:gap-x-16
          lg:gap-x-8 md:gap-y-24 sm:gap-x-0"
          >
            <div className="col-span-12">
              <FeaturedProject
                title="Linear Homepage Application"
                img={project1}
                summary="In recreating the linear homepage, I focused on various elements of the homepage design. Starting with the main page structure, 
                I created a responsive main navigation with an awesome animation specifically 
                designed for mobile devices.The main hero section features impressive micro animations, 
                created using CSS animations. Additionally, I added an animated keyboard shortcut component and a command menu component to enhance the user experience.
                The homepage also features captivating gradients and colors for visual appeal. CSS was extensively used to bring 
                life and interactivity to the components throughout the development process."   
                link="https://linear-homepage.vercel.app/"
                github="https://github.com/defview/linear-homepage"
                type="Featured Project"
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Nike Product Card"
                img={project2}
                summary="
                I designed an impressive Product Card using HTML, CSS, 
                and Vanilla JavaScript. The card offers the functionality 
                to change the shoe color, dynamically updating the main color 
                of the card accordingly. It includes a captivating animation 
                that triggers when the shoe's background color is changed. 
                Furthermore, the card is fully responsive, providing a seamless 
                experience on various devices."
                link="https://github.com/defview/nike-product-card"
                github="https://github.com/defview/nike-product-card"
                type="Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="interactive-todo-list-app"
                img={project3}
                summary="I created an interactive To-Do List application using advanced React Hooks such as useEffect, 
                useMemo, useContext, and useRef. The application includes a drag 
                and drop feature facilitated by a library, allowing users to sort 
                their to-do items effortlessly for better organization. By 
                leveraging React's advanced hooks, the application provides a 
                dynamic and efficient user experience, enabling easy task 
                management and prioritization."
                link="https://interactive-todo-list-app.vercel.app/"
                github="https://github.com/defview/interactive-todo-list-app"
                type="Project"
              />
            </div>

            <div className="col-span-12">
              <FeaturedProject
                title="cine-critique"
                img={project4}
                summary="Cine-Critique is an advanced movie database application built 
                with React, Redux, and Tailwind. During development, I mastered 
                key concepts of React.js, such as JSX syntax, component creation, 
                working with props and state, component lifecycle, conditional 
                rendering, and list management with keys. I integrated Redux for 
                state management, and implemented complex JavaScript logic to 
                enhance user experience and interactivity. The result is a powerful 
                and user-friendly tool for movie enthusiasts."
                link="https://cine-critique-three.vercel.app/"
                github="https://github.com/defview/cine-critique"
                type="Featured Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="animated-carousel"
                img={project5}
                summary="I created a visually appealing and animated carousel using 
                TailwindCSS and TypeScript. The carousel utilizes the styling 
                capabilities of TailwindCSS to enhance its visual appearance. 
                Additionally, TypeScript is used to provide type safety and 
                improve code maintainability. The result is an interactive and 
                attractive carousel that adds a dynamic element to the user 
                interface."
                link="https://animated-carousel.vercel.app/"
                github="https://github.com/defview/animated-carousel"
                type="Project"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
