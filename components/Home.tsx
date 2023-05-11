// React
import { useEffect } from "react";

// Next
import Link from "next/link";

// Packages
import KUTE from "kute.js";

// Icons
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";

const Home = () => {
  const socialMediaBtns = [
    {
      download: false,
      link: "https://www.linkedin.com/in/yousef-aboalata-67b7b5256/",
      icon: <LinkedInIcon />,
    },
    {
      download: false,
      link: "https://github.com/Yousef-El-Black",
      icon: <GitHubIcon />,
    },
    {
      download: false,
      link: "mailto:yousefelblackdev@gmail.com",
      icon: <MailOutlineIcon />,
    },
    {
      download: true,
      link: "/assets/pdf/elblack-resume.pdf",
      icon: <AssignmentIndIcon />,
    },
  ];

  useEffect(() => {
    const tween = KUTE.fromTo(
      "#blob1",
      { path: "#blob1" },
      { path: "#blob2" },
      { repeat: 999, duration: 3000, yoyo: true }
    );
    tween.start();
  }, []);

  return (
    <div
      id="home"
      className="lg:bg-[url(/assets/waves/layered-waves-bottom-amber.png)] dark:lg:bg-[url(/assets/waves/layered-waves-bottom-blue.png)] duration-300 bg-no-repeat bg-cover bg-bottom"
    >
      <div className="container mx-auto h-full relative overflow-hidden">
        {/* Start Blob */}
        <div className="blob absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] -z-10">
          <svg
            id="visual"
            viewBox="0 0 900 600"
            width="900"
            height="600"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            version="1.1"
          >
            <g transform="translate(406.85039092019554 294.6218637028421)">
              <path
                id="blob1"
                d="M157 -160C203.6 -110.3 241.8 -55.2 243.7 1.9C245.6 58.9 211.2 117.9 164.5 167.9C117.9 217.9 58.9 258.9 3.1 255.9C-52.8 252.8 -105.6 205.6 -132.8 155.6C-159.9 105.6 -161.5 52.8 -152.7 8.7C-144 -35.4 -125 -70.7 -97.9 -120.4C-70.7 -170 -35.4 -234 9.9 -243.9C55.2 -253.8 110.3 -209.6 157 -160"
                className="fill-amber dark:fill-blue duration-300"
              ></path>
            </g>
            <g transform="translate(464.120429412343 287.0363357716742)">
              <path
                id="blob2"
                d="M118.3 -114.3C158.8 -77.8 200.9 -38.9 206.9 6C212.9 50.9 182.8 101.8 142.3 143.2C101.8 184.5 50.9 216.2 7.8 208.5C-35.4 200.7 -70.7 153.4 -120.7 112C-170.7 70.7 -235.4 35.4 -235.9 -0.6C-236.5 -36.5 -173.1 -73.1 -123.1 -109.6C-73.1 -146.1 -36.5 -182.5 1.2 -183.7C38.9 -184.9 77.8 -150.8 118.3 -114.3"
                className="fill-amber dark:fill-blue duration-300"
                visibility="hidden"
              ></path>
            </g>
          </svg>
        </div>
        {/* End Blob */}

        {/* Start Content */}
        <div className="content flex flex-col justify-center items-center text-center h-calc-75 md:h-calc-100">
          <span className="uppercase font-extralight tracking-wider p-0 m-0 text-lg">
            Let{"'"}s Build together
          </span>
          <h1 className="flex items-center">
            I{"'"}m
            <span
              className="overflow-hidden text-blue dark:text-amber select-none inline-block hover:shadow-lg py-3 px-5 rounded-lg hover:bg-white dark:hover:bg-dimGray hover:mx-3 cursor-pointer duration-300 relative"
              id="elblack"
            >
              {"{El-Black}"}
            </span>
          </h1>
          <h1 className="pb-3">A Full-Stack Web Engineer</h1>
          <p className="lg:w-[75%]">
            I{"'"}m Youssef Aboalata. A Full-Stack Engineer Specializing in
            building (and occassionally designing) exceptional digital
            experiences. Currently, I’m focused on building responsive
            Full-Stack web applications while learning 3D Websites technologies
            (Three.js).
          </p>
          {/* Start Social Media Btns */}
          <ul className="flex justify-between items-center gap-3 md:gap-5 py-5">
            {socialMediaBtns.map((btn, index) => {
              return (
                <Link
                  href={btn.link}
                  key={index}
                  download={btn.download}
                  className="rounded-full bg-cultured dark:bg-eerieBlack shadow-md drop-shadow-lg dark:shadow-lightSlateGray shadow-gainsboro p-5 hover:scale-90 hover:translate-y-1   hover:translate-x-1 duration-300"
                >
                  {btn.icon}
                </Link>
              );
            })}
          </ul>
          {/* End Social Media Btns */}
        </div>

        {/* End Content */}
      </div>
    </div>
  );
};

export default Home;
