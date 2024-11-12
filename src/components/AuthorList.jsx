import baldwinImg from "../images/baldwin.webp";
import wildeImg from "../images/wilde.webp";
import woolfImg from "../images/woolf.webp";
import chopinImg from "../images/chopin.webp";
import leacockImg from "../images/leacock.webp";
import henryImg from "../images/henry.webp";

export default function AuthorList() {
  const authors = [
    { name: "Oscar Wilde", imgSrc: wildeImg },
    { name: "James Baldwin", imgSrc: baldwinImg },
    { name: "Virginia Woolf", imgSrc: woolfImg },
    { name: "Kate Chopin", imgSrc: chopinImg },
    { name: "Stephen Leacock", imgSrc: leacockImg },
    { name: "O Henry", imgSrc: henryImg },
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
