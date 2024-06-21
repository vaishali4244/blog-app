import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo.PNG";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [navShow, setNavShow] = useState(
    window.innerWidth > 800 ? true : false
  );

  const navCloseFunc = () => {
    if (window.innerWidth < 800) {
      setNavShow(false);
    } else {
      setNavShow(true);
    }
  };

  return (
    <nav>
      <div className="container nav-container">
        <Link to="/" className="nav-logo" onClick={navCloseFunc}>
          <img src={Logo} alt="navbar logo"  />
        </Link>
        {navShow && (
          <ul className="nav-menu">
            <li>
              <Link to="/profile/samuel" onClick={navCloseFunc}>Samuel Roy</Link>
            </li>
            <li>
              <Link to="/create" onClick={navCloseFunc}>Create Post</Link>
            </li>
            <li>
              <Link to="/authors" onClick={navCloseFunc}>Authors</Link>
            </li>
            <li>
              <Link to="/logout" onClick={navCloseFunc}>Logout</Link>
            </li>
          </ul>
        )}
        <button className="nav-toggle-btn" onClick={() => setNavShow(!navShow)}>
          {navShow ? <AiOutlineClose /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
};

export default Header;
