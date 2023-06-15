import Layout from "@/components/Layout";
import Image from "next/image";
import profilepic from "../../public/images/profile/workpiece1.png";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import HireMe from "@/components/HireMe";
import TransitionEffect from "@/components/TransitionEffect";
import Head from "next/head";
import MailMe from "@/components/MailMe";

export default function Home() {
  return (
    <>
      <Head>
        <title>FolaAlex | Home Page</title>
        <meta name="description" content="any description" />
      </Head>

      <TransitionEffect />
      <main className="flex items-center w-full min-h-screen">
        <Layout className="pt-0 md:pt-16 sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-1/2 md:w-full">
              <Image
                src={profilepic}
                alt="folaalex"
                className="w-full h-auto lg:hidden md:inline-block md:w-full"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="Turning Vision Into Reality With Code And Design."
                className="!text-6xl !text-left !text-[#E2E8F0] dark:!text-[#015249]
              xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />
              <p className="my-4 text-lg font-medium dark:text-[#015249] md:text-sm sm:text-xs">
                As a skilled front-end developer, I am dedicated to turning
                ideas into innovative web applications. Explore my latest
                projects and articles, showcasing my expertise in React.js and
                web development.
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center">
                <Link
                  className="flex items-center bg-[#19405F] p-2.5 px-6 rounded-lg
              text-lg font-semibold hover:bg-dark h0ver:text-dark border-solid
              border-2 border-transparent hover:border-dark text-[#E2E8F0]
              hover:text-[#37B6EF] transition-all ease-in-out duration-700
              dark:bg-[#A5A5AF] dark:text-[#015249] md:p-2 md:px-4 md:text-base
              hover:dark:border-none"
                  download={true}
                  href="https://drive.google.com/drive/u/2/my-drive?hl=en"
                  target={"_blank"}
                >
                  Resume <LinkArrow className={"w-6 ml-1"} />
                </Link>
                <Link
                  className="ml-4 text-lg font-medium capitalize border-b-2 border-dark 
                hover:text-[#E2E8F0] transition-all ease-in-out duration-700 text-[#37B6EF]
                dark:text-[#015249] dark:border-[#015249] md:text-base"
                  href="mailto:folafemialec@gmail.com"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>

        <HireMe />

        <div className="absolute right-11 bottom-8 inline-block w-20 md:hidden">
          <MailMe />
        </div>
      </main>
    </>
  );
}
