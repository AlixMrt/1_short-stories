import reactLogo from "../svg/tech-list/react.svg";
import reduxLogo from "../svg/tech-list/redux.svg";
import routerLogo from "../svg/tech-list/router.svg";
import githubLogo from "../svg/tech-list/github.svg";
import gitLogo from "../svg/tech-list/git.svg";
import sassLogo from "../svg/tech-list/sass.svg";

import baldwinImg from "../images/baldwin.webp";
import wildeImg from "../images/wilde.webp";
import woolfImg from "../images/woolf.webp";
import chopinImg from "../images/chopin.webp";
import leacockImg from "../images/leacock.webp";
import henryImg from "../images/henry.webp";

export default function AuthorList() {
  const authors = [
    { name: "Oscar Wilde", imgSrc: wildeImg, logo: reactLogo },
    { name: "James Baldwin", imgSrc: baldwinImg, logo: sassLogo },
    { name: "Virginia Woolf", imgSrc: woolfImg, logo: reduxLogo },
    { name: "Kate Chopin", imgSrc: chopinImg, logo: routerLogo },
    { name: "Stephen Leacock", imgSrc: leacockImg, logo: githubLogo },
    { name: "O Henry", imgSrc: henryImg, logo: gitLogo },
  ];

  return (
    <div className="author-list">
      {authors.map((author, index) => {
        return (
          <div className="author-container" key={author.name + index}>
            <img src={author.imgSrc} alt={author.name} />
            <h3 className="heading-3">{author.name}</h3>
          </div>
        );
      })}
    </div>
  );
}
