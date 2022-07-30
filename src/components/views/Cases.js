import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import { AiOutlineLeft } from 'react-icons/ai';
import { RiMicFill } from 'react-icons/ri';
import { IoMdSettings } from 'react-icons/io';

const Cases = () => {
  const { countryId } = useParams();
  const result = useSelector((state) => state.data);
  const newArr = result.filter((element) => element.country === countryId);
  const {
    flag, country, continent, population, cases, recovered, deaths,
  } = newArr[0];

  return (
    <>
      <nav className="navBar">
        <ul>
          <li>
            <NavLink to={`/continent/${continent}`}>
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
        <img src={flag} alt="flag" />
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
            <li>{population.toLocaleString()}</li>
            <li>{cases.toLocaleString()}</li>
            <li>{recovered.toLocaleString()}</li>
            <li>{deaths.toLocaleString()}</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Cases;
