import React from 'react';
import { AiOutlineLeft } from 'react-icons/ai';
import { IoIosSearch } from 'react-icons/io';
import { MdMic } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const Nav = () => {
  const navigate = useNavigate();

  return (
    <nav className="navBar">
      <ul>
        <li>
          <AiOutlineLeft onClick={() => navigate(-1)} />
        </li>
        <li className="right-link">
          <MdMic />
        </li>
        <li>
          <button type="button" onClick={() => { document.querySelector('.searchContainer').classList.toggle('hide'); }}>
            <IoIosSearch />
          </button>
        </li>
      </ul>
    </nav>
  );
};
export default Nav;
