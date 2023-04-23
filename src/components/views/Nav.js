import React from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { MdSettings } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const Nav = () => {
  const navigate = useNavigate();

  return (
    <nav className="navBar">
      <ul>
        <li>
          <AiOutlineLeft onClick={() => navigate(-1)} />
          <AiOutlineRight onClick={() => navigate(1)} />
        </li>
        <li>
          <MdSettings />
        </li>
      </ul>
    </nav>
  );
};
export default Nav;
