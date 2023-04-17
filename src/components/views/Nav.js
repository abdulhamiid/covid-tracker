import React from 'react';
import { AiOutlineLeft } from 'react-icons/ai';
import { IoIosSearch } from 'react-icons/io';

import { MdMic } from 'react-icons/md';
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
        <MdMic />

        <NavLink to="/about">
          {/* <IoMdSettings /> */}
        </NavLink>
      </li>
      <li>
        <button type="button" onClick={() => { document.querySelector('.searchContainer').classList.toggle('hide'); }}>
          <IoIosSearch />
        </button>
      </li>
    </ul>
  </nav>
);
export default Nav;
