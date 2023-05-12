// React
import { useRef, FormEvent } from "react";

// Next
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

// Packages
import emailjs from "emailjs-com";

// Images
import CodingImg from "@/public/assets/imgs/coding-image.jpg";

// Icons
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Contact = () => {
  const contactBtns = [
    {
      icon: <InstagramIcon fontSize="large" />,
      link: "https://www.instagram.com/elblackdev/",
    },
    {
      icon: <FacebookIcon fontSize="large" />,
      link: "https://www.facebook.com/elblackdev",
    },
    {
      icon: <LinkedInIcon fontSize="large" />,
      link: "https://www.linkedin.com/in/yousef-aboalata-67b7b5256/",
    },
    {
      icon: <GitHubIcon fontSize="large" />,
      link: "https://github.com/Yousef-El-Black",
    },
  ];

  const router = useRouter();

  // EmailJS Info
  const serviceID = "service_b4j655r";
  const templateID = "template_wim4331";
  const publicKey = "V2CtkP6ndI4jtM64I";

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs.sendForm(serviceID, templateID, form.current!, publicKey).then(
      (result) => {
        router.push("/");
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <div id="contactme">
      <div className="container mx-auto py-5">
        <div>
          <span className="text-amber dark:text-blue uppercase tracking-widest font-extralight text-xl text-center w-full inline-block lg:inline">
            CONTACT
          </span>
          <h1 className="text-center lg:text-start">Get In Touch</h1>
        </div>
        <div className="flex flex-col lg:flex-row gap-5 my-10">
          <div className="w-full lg:w-1/3 shadow-lg shadow-dimGray dark:shadow-gainsboro rounded-lg p-5 flex flex-col justify-between">
            <div className="top">
              <div className="image aspect-video overflow-hidden rounded-lg">
                <Image src={CodingImg} alt="dev Image" />
              </div>
              <div className="title my-3">
                <h2>Youssef Aboalata</h2>
                <h3>Full-Stack Engineer</h3>
              </div>
            </div>
            <div className="paragraphs">
              <p>I am available for freelance or full-positions.</p>
              <p>Contact me and let’s talk.</p>
            </div>
            <div className="social-media-links">
              <span className="uppercase text-amber dark:text-blue">
                Contact With Me
              </span>
              <ul className="flex justify-between items-center py-5">
                {contactBtns.map((item, index) => {
                  return (
                    <Link href={item.link} key={index}>
                      <li className="p-3 shadow-lg shadow-lightSlateGray dark:shadow-gainsboro rounded-full bg-cultured dark:bg-eerieBlack hover:scale-90 hover:translate-y-1 hover:translate-x-1 duration-300">
                        {item.icon}
                      </li>
                    </Link>
                  );
                })}
              </ul>
            </div>
          </div>
          <form
            ref={form}
            onSubmit={sendEmail}
            className="w-full lg:w-2/3 shadow-lg shadow-dimGray dark:shadow-gainsboro rounded-lg p-3 flex flex-col justify-between"
          >
            <div className="flex justify-center gap-5 items-center">
              <div className="name flex flex-col justify-center items-start gap-1 my-3 w-1/2">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full rounded-lg h-[35px] indent-2 outline-none"
                  required
                />
              </div>
              <div className="phone-number flex flex-col justify-center items-start gap-1 my-3 w-1/2">
                <label htmlFor="phone-number">Phone Number</label>
                <input
                  type="text"
                  id="phone-number"
                  name="phone"
                  className="w-full rounded-lg h-[35px] indent-2 outline-none"
                  required
                />
              </div>
            </div>
            <div className="email flex flex-col justify-center items-start gap-1 my-3">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full rounded-lg h-[35px] indent-2 outline-none"
                required
              />
            </div>
            <div className="subject flex flex-col justify-center items-start gap-1 my-3">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full rounded-lg h-[35px] indent-2 outline-none"
                required
              />
            </div>
            <div className="message flex flex-col justify-center items-start gap-1 my-3">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                className="w-full rounded-lg h-[100px] indent-2 outline-none p-1"
                required
              />
            </div>
            <button
              type="submit"
              className="uppercase bg-amber dark:bg-blue hover:opacity-75 hover:scale-95 duration-300 py-2 w-full rounded-lg mt-3"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
