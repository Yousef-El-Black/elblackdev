// Next
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

// Components
import Header from "@/components/Header";

// Images
import Preloader from "@/components/Preloader";

const Shortly = () => {
  const projectData = {
    title: "Rest Countries API",
    demo: "/",
    code: "/",
    technologies: ["React", "Tailwind", "Javascript", "Firebase"],
    overview:
      "Shortly is an online tool that allows users to create shorter, more manageable links for sharing on social media platforms or through email. By simply entering a long URL into the tool, Shortly generates a unique, condensed link that redirects to the original content when clicked. This service is especially useful for individuals and businesses looking to track click-through rates and analyze web traffic. Additionally, Shortly offers customization options, such as the ability to choose a custom domain or add a description to the link, making it a versatile and user-friendly tool.",
    imgLink: "/assets/imgs/gallery/shortly.jpg",
  };

  return (
    <>
      <Head>
        <title>{projectData.title} Project</title>
      </Head>
      <div className="bg-cultured dark:bg-eerieBlack">
        <Preloader />
        {/* Start Head of Page */}
        <div className="h-[280px] lg:h-[324px] relative w-full overflow-hidden">
          <Header />
          <h1 className="absolute bottom-8 left-[50%] translate-x-[-50%] lg:translate-x-0 lg:left-0 container mx-auto z-[2] text-white">
            {projectData.title}
          </h1>
          <Image
            src={projectData.imgLink}
            alt={projectData.title + " Image"}
            className="absolute w-full top-[50%] translate-y-[-50%]"
            width={typeof window === undefined ? window.innerWidth : 1440}
            height={typeof window === undefined ? window.innerHeight : 1024}
          />
          <div className="bg-[#000000] opacity-80 absolute top-0 left-0 w-full h-full"></div>
        </div>
        {/* End Head of Page */}

        {/* Start Content */}
        <div className="content py-10">
          <div className="container mx-auto flex flex-col gap-5 lg:flex-row">
            <div className="w-full lg:w-2/3 text-center lg:text-start">
              <div className="title">
                <span className="uppercase text-amber dark:text-blue tracking-widest py-3">
                  Project
                </span>
                <h2 className="capitalize">overview</h2>
              </div>
              <p className="py-4 leading-8">{projectData.overview}</p>
              <div className="btns flex justify-center lg:justify-start items-center gap-4">
                <Link
                  href={projectData.demo}
                  className="bg-amber dark:bg-blue rounded-lg py-2 px-4 hover:scale-105 duration-300 text-white"
                >
                  Demo
                </Link>
                <Link
                  href={projectData.code}
                  className="bg-amber dark:bg-blue rounded-lg py-2 px-4 hover:scale-105 duration-300 text-white"
                >
                  Code
                </Link>
              </div>
            </div>
            <div className="flex justify-center w-full lg:w-1/3">
              <div className="px-5 py-4 shadow shadow-lightSlateGray dark:shadow-gainsboro rounded-lg">
                <h3 className="px-5">Technologies</h3>
                <ul className="py-4 flex flex-col gap-2">
                  {projectData.technologies.map((item, index) => {
                    return (
                      <li key={index} className="capitalize">
                        {item}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* End Content */}
      </div>
    </>
  );
};

export default Shortly;
