// Icons
import WebIcon from "@mui/icons-material/Web";
import CodeIcon from "@mui/icons-material/Code";
import ConstructionIcon from "@mui/icons-material/Construction";

const Skills = () => {
  const frontendSkills = [
    "HTML",
    "CSS",
    "Javascript",
    "Bootstrap",
    "Pug.js",
    "SASS",
    "React.js",
    "Next.js",
    "Tailwind CSS",
    "Redux",
  ];

  const backendSkills = [
    "Node.js",
    "Express.js",
    "PHP",
    "MySQL",
    "MongoDB",
    "Mongoose",
    "PostgreSQL",
    "Restful APIs",
  ];

  const othersSkills = [
    "Git",
    "GitHub",
    "AWS Cloud",
    "Jasmine",
    "Jest",
    "Vercel",
    "Docker",
    "Typescript",
    "Adobe Photoshop",
    "VS Code",
  ];

  return (
    <div id="skills" className="bg-amber dark:bg-blue relative">
      {/* Start Top Tilt */}
      <div
        className="absolute top-0 left-0 w-full overflow-hidden"
        style={{ lineHeight: "0" }}
      >
        <svg
          className="relative block w-calc1.3 h-[75px]"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            className="fill-cultured dark:fill-eerieBlack"
          ></path>
        </svg>
      </div>
      {/* End Top Tilt */}

      <div className="container mx-auto min-h-screen py-[75px] flex flex-col">
        <h1 className="uppercase text-center text-cultured dark:text-eerieBlack">
          Skills
        </h1>
        <div className="flex justify-between items-center flex-1 py-5 gap-8">
          <div className="frontend rounded-lg bg-cultured dark:bg-eerieBlack p-3 w-1/3">
            <div className="head text-center text-amber dark:text-blue flex flex-col gap-1 justify-center items-center py-3">
              <WebIcon fontSize="large" className="animate-bounce" />
              <h3 className="text-amber font-semibold text-2xl">Front-End</h3>
            </div>
            <ul className="flex flex-col bg-amber dark:bg-blue h-[320px] px-3 py-2 text-cultured text-lg tracking-wide rounded-lg">
              {frontendSkills.map((skill, index) => {
                return <li key={index}>{skill}</li>;
              })}
            </ul>
          </div>
          <div className="backend rounded-lg bg-cultured dark:bg-eerieBlack p-3 w-1/3">
            <div className="head text-center text-amber dark:text-blue flex flex-col gap-1 justify-center items-center py-3">
              <CodeIcon fontSize="large" className="animate-bounce" />
              <h3 className="text-amber font-semibold text-2xl">Back-End</h3>
            </div>
            <ul className="flex flex-col bg-amber dark:bg-blue h-[320px] px-3 py-2 text-cultured text-lg tracking-wide rounded-lg">
              {backendSkills.map((skill, index) => {
                return <li key={index}>{skill}</li>;
              })}
            </ul>
          </div>
          <div className="others rounded-lg bg-cultured dark:bg-eerieBlack p-3 w-1/3">
            <div className="head text-center text-amber dark:text-blue flex flex-col gap-1 justify-center items-center py-3">
              <ConstructionIcon fontSize="large" className="animate-bounce" />
              <h3 className="text-amber font-semibold text-2xl">Others</h3>
            </div>
            <ul className="flex flex-col bg-amber dark:bg-blue h-[320px] px-3 py-2 text-cultured text-lg tracking-wide rounded-lg">
              {othersSkills.map((skill, index) => {
                return <li key={index}>{skill}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>

      {/* Start Bottom Tilt */}
      <div
        className="absolute bottom-0 left-0 w-full overflow-hidden rotate-180"
        style={{ lineHeight: "0" }}
      >
        <svg
          className="relative block w-calc1.3 h-[75px]"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            className="fill-cultured dark:fill-eerieBlack"
          ></path>
        </svg>
      </div>
      {/* End Bottom Tilt */}
    </div>
  );
};

export default Skills;
