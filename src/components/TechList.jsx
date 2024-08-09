import reactLogo from "../svg/tech-list/react.svg";
import reduxLogo from "../svg/tech-list/redux.svg";
import routerLogo from "../svg/tech-list/router.svg";
import githubLogo from "../svg/tech-list/github.svg";
import gitLogo from "../svg/tech-list/git.svg";
import sassLogo from "../svg/tech-list/sass.svg";
import vpsLogo from "../svg/tech-list/vps.svg";

export default function TechList() {
  const technologies = [
    { name: "React", logo: reactLogo },
    { name: "Sass", logo: sassLogo },
    { name: "Redux RTK", logo: reduxLogo },
    { name: "Router V6", logo: routerLogo },
    { name: "Github", logo: githubLogo },
    { name: "Git", logo: gitLogo },
    { name: "VPS", logo: vpsLogo },
  ];

  return (
    <div className="tech-list">
      {technologies.map((tech, index) => {
        return (
          <div className="tech-container" key={tech.name + index}>
            <h3 className="heading-3">{tech.name}</h3>
            <img src={tech.logo} alt={tech.name} />
          </div>
        );
      })}
    </div>
  );
}
