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
            I am a highly skilled MERN-Stack Engineer with a strong expertise in
            TypeScript, MongoDB, Express.js, React.js, and Node.js. I am
            passionate about building robust and scalable web applications using
            these technologies.
            <br />
            <br /> With a deep understanding of TypeScript, I leverage its
            static typing and advanced features to write safer, more
            maintainable code. TypeScript allows me to catch errors during
            development and provides better tooling support, resulting in
            improved productivity and code quality.
            <br />
            <br /> Throughout my career, I have successfully developed
            end-to-end web applications, from ideation to deployment. I excel in
            collaborative environments, working closely with cross-functional
            teams to comprehend project requirements, design technical
            architectures, and deliver high-quality code.
            <br />
            <br />
            Proficient in frontend and backend technologies, I specialize in
            creating responsive and intuitive user interfaces using modern
            frameworks like React.js. Additionally, I have extensive experience
            in designing and implementing RESTful APIs, utilizing the power of
            Node.js, Express.js, and TypeScript for building robust backend
            systems.
            <br />
            <br />
            With MongoDB, I efficiently manage data and implement database
            models, ensuring optimal performance and scalability. I am adept at
            implementing authentication and authorization mechanisms,
            integrating third-party APIs, and optimizing performance for
            seamless user experiences.
            <br />
            <br />
            As an avid learner, I continually stay updated with the latest
            industry trends and best practices, ensuring that I bring
            cutting-edge solutions to every project. I thrive on tackling new
            challenges and exploring innovative approaches to meet the dynamic
            demands of the digital landscape.
            <br />
            <br />
            If you are seeking a dedicated MERN-Stack Engineer with expertise in
            TypeScript, who can contribute to your team‘s success by delivering
            modern web applications, I would be thrilled to collaborate with
            you. Let‘s connect and discuss how I can leverage my technical
            skills and strong problem-solving abilities to bring your vision to
            life.
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
