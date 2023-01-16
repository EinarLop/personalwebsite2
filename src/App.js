import Blop1 from "./imgs/blops/blop1.svg";
import Blop2 from "./imgs/blops/blop2.svg";
import Blop3 from "./imgs/blops/blop3.svg";
import Blop4 from "./imgs/blops/blop4.svg";
import Blop5 from "./imgs/blops/blop5.svg";
import Blop6 from "./imgs/blops/blop6.svg";
import Blop7 from "./imgs/blops/blop7.svg";

import Project from "./components/Project";
import ProjectsData from "./data/projects.json";

function App() {
  return (
    <div className="flex flex-wrap justify-center p-8 pb-0 md:p-14 max-w-5xl mx-auto">
      <p
        className="text-4xl w-full -ml-10 mb-8 bg-contain bg-no-repeat "
        style={{ backgroundImage: `url(${Blop1}`, backgroundPosition: "25%" }}
      >
        Hello, I am Einar
      </p>
      <ul className="text-2xl w-full  mb-8 list-disc list-outside">
        <li
          className="mb-4 bg-contain bg-no-repeat "
          style={{ backgroundImage: `url(${Blop2}`, backgroundPosition: "0" }}
        >
          Computer science student at Tecnológico de Monterrey
        </li>
        <li
          className="mb-4 bg-contain bg-no-repeat"
          style={{ backgroundImage: `url(${Blop3}`, backgroundPosition: "40%" }}
        >
          Currently pursuing a concentration in Intelligent Systems
        </li>
        <li
          className="bg-contain bg-no-repeat"
          style={{ backgroundImage: `url(${Blop4}`, backgroundPosition: "10%" }}
        >
          Expected graduation date: June 2023
        </li>
      </ul>
      <div className="flex w-full justify-around flex-wrap text-2xl underline mb-8 gap-x-10">
        <a
          className="bg-contain bg-no-repeat"
          style={{ backgroundImage: `url(${Blop5}`, backgroundPosition: "50%" }}
        >
          Resume
        </a>
        <a
          className="mb-4 bg-contain bg-no-repeat"
          style={{ backgroundImage: `url(${Blop6}`, backgroundPosition: "70%" }}
        >
          LinkedIn
        </a>
        <a
          className="bg-contain bg-no-repeat"
          style={{ backgroundImage: `url(${Blop7}`, backgroundPosition: "10%" }}
        >
          Github
        </a>
      </div>
      <p className="text-3xl mb-8 w-full text-center">Projects</p>

      {ProjectsData.map((project) => (
        <Project
          title={project.title}
          bullets={project.bullets}
          type={project.type}
          tags={project.tags}
          links={project.links}
        />
      ))}
    </div>
  );
}

export default App;
