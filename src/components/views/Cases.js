import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { FaViruses } from 'react-icons/fa';
import Nav from './Nav';

const Cases = () => {
  const { countryId } = useParams();
  const result = useSelector((state) => state.data);
  const newArr = result.filter((element) => element.country === countryId);
  const {
    flag, country, continent, population, cases, recovered, deaths,
  } = newArr[0];

  return (
    <>
      <Nav />
      <div className="cases">
        <img src={flag} alt="flag" />
        <h1>{country}</h1>
        <div>
          <ul className="data">
            <li>
              <p>Continent</p>
              <p>{continent}</p>
            </li>
            <li>
              <p>Population</p>
              <p>{population.toLocaleString()}</p>
            </li>
            <li>
              <p>Cases</p>
              <p>{cases.toLocaleString()}</p>
            </li>
            <li>
              <p>Recorvered</p>
              <p>{recovered.toLocaleString()}</p>
            </li>
            <li>
              <FaViruses />
              <p>Deaths</p>
              <p>{deaths.toLocaleString()}</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Cases;
