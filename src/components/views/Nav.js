import React from 'react';
import { AiOutlineLeft } from 'react-icons/ai';
import { IoMdSettings } from 'react-icons/io';
import { RiMicFill } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';

const Nav = () => (
  <nav className="navBar">
    <ul>
      <li>
        <NavLink to="/">
          <AiOutlineLeft />
          Home
        </NavLink>
      </li>
      <li className="right-link">
        <RiMicFill />
        <NavLink to="/about">
          <IoMdSettings />
        </NavLink>
      </li>
    </ul>
  </nav>
);
export default Nav;
