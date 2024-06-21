import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <ul className="footer-categories">
        <li>
          <Link to="posts/categories/:Agriculture">Agriculture</Link>
        </li>
        <li>
          <Link to="posts/categories/:Art">Art</Link>
        </li>
        <li>
          <Link to="posts/categories/:Business">Business</Link>
        </li>
        <li>
          <Link to="posts/categories/:Education">Education</Link>
        </li>
        <li>
          <Link to="posts/categories/:Entertainment">Entertainment</Link>
        </li>
        <li>
          <Link to="posts/categories/:Uncategories">Uncategories</Link>
        </li>
        <li>
          <Link to="posts/categories/:Weather">Weather</Link>
        </li>
      </ul>
      <div className="footer-copyright">
        <small>All Rights Reserved &copy; Vaishali</small>
      </div>
    </footer>
  );
};

export default Footer;
