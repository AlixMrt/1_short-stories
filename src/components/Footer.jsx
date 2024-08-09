import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer">
      <h2 className="heading-5">
        <Link to="/">Short Stories</Link>
      </h2>
      <h2 className="heading-5">All Rights reserved. 2024</h2>
    </div>
  );
}
