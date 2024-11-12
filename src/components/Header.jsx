import { Link, NavLink } from "react-router-dom";
import svg from "../svg/books.svg";

export default function Header() {
  return (
    <header className="header">
      <Link to="/" className="logo-container heading-2">
        <img src={svg} className="logo" alt="" />
        <div>
          Short <br /> Stories
        </div>
      </Link>

      <nav className="nav">
        <NavLink to="/" className="heading-2">
          Home
        </NavLink>
        <NavLink to="/stories" className="heading-2">
          Stories
        </NavLink>
        <NavLink to="/about" className="heading-2">
          Authors
        </NavLink>
      </nav>
    </header>
  );
}
