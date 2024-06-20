import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../images/logo.PNG';
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";


const Header = () => {
  return (
   <nav>
    <div className="container nav-container">
      <Link to='/' className='nav-logo'>
      <img src={Logo} alt="navbar logo" /></Link>
      <ul className="nav-menu">
      {/* <FaBars /> */}
        <li><Link to='/profile/samuel'>Samuel Roy</Link></li>
        <li><Link to='/create'>Create Post</Link></li>
        <li><Link to='/authors'>Authors</Link></li>
        <li><Link to='/logout'>Logout</Link></li>
      </ul>
      <button className='nav-toggle-btn'>
      <AiOutlineClose />
      </button>
    </div>
   </nav>
  )
}

export default Header
