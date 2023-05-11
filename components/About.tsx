// Next
import Image from "next/image";

// Images
import LaptopImg from "@/public/assets/imgs/about-img.png";

const About = () => {
  return (
    <div
      id="about"
      className="lg:bg-[url(/assets/waves/layered-waves-top-amber.png)] dark:lg:bg-[url(/assets/waves/layered-waves-top-blue.png)] duration-300 bg-no-repeat bg-cover bg-top min-h-screen"
    >
      <div className="container mx-auto flex justify-center items-center min-h-screen lg:pt-20 gap-5">
        <div className="text text-center lg:text-start lg:w-1/2">
          <span className="text-amber dark:text-blue uppercase tracking-widest font-extralight text-xl">
            About
          </span>
          <h1>Who I Am</h1>
          <p className="py-4"># I’m not your normal developer</p>
          <p className="leading-6">
            A full-stack engineer is a developer who has the knowledge and
            expertise to work on both the front-end and back-end of a web
            application. They are skilled in multiple programming languages,
            frameworks, and tools that are necessary for building complex and
            robust web applications.
            <br />
            <br /> As a full-stack engineer, your main responsibility is to
            ensure that the web application functions smoothly, from the user
            interface to the server-side logic. You must be comfortable working
            with both client-side and server-side technologies, including HTML,
            CSS, JavaScript, Node.js, and databases like MySQL or MongoDB.
            <br />
            <br /> In addition to technical skills, full-stack engineers also
            need to possess strong problem-solving abilities and a willingness
            to learn new technologies as they emerge. They must be able to work
            collaboratively with designers, product managers, and other
            stakeholders to understand user requirements and deliver
            high-quality software solutions.
          </p>
        </div>
        <div className="img w-1/2 lg:flex justify-center items-center hidden">
          <div className="frame w-[430px] h-[480px] flex justify-center items-center shadow-lg drop-shadow rounded-lg shadow-lightSlateGray dark:shadow-gainsboro">
            <Image
              src={LaptopImg}
              width={400}
              height={450}
              alt="laptop-image"
              className="rounded-lg select-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
