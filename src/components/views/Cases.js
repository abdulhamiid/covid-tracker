import React from 'react';
import { AiOutlineLeft } from 'react-icons/ai';
import { IoMdSettings } from 'react-icons/io';
import { RiMicFill } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Cases() {
  const result = useSelector((state) => state.cases);
  const {
    flagURL, country, continent, population, cases, recovered, deaths,
  } = result;
  const route = continent.replace(/\s/g, '-').toLowerCase();

  return (
    <>
      <nav className="navBar">
        <ul>
          <li>
            <NavLink to={`/${route}`}>
              <AiOutlineLeft />
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
      <div className="statistics">
        <img src={flagURL} alt="flag" />
        <h1>{country}</h1>
        <div>
          <ul>
            <li>Continent</li>
            <li>Population</li>
            <li>Cases</li>
            <li>Recorvered</li>
            <li>Deaths</li>
          </ul>
          <ul>
            <li>{continent}</li>
            <li>{population}</li>
            <li>{cases}</li>
            <li>{recovered}</li>
            <li>{deaths}</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Cases;
