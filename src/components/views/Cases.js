import React from 'react';
import { useSelector } from 'react-redux';

function Cases() {
  const result = useSelector((state) => state.cases);
  const {
    flagURL, country, continent, population, cases, recovered, deaths,
  } = result;

  return (
    <div>
      <p>
        Continent
        {' - '}
        {continent}
      </p>
      <h1>
        {country}
      </h1>
      <img src={flagURL} alt="flag" />
      <p>Country Information</p>
      <ul>
        <li>
          Population
          {population}
        </li>
        <li>
          Cases
          {cases}
        </li>
        <li>
          Deaths
          {deaths}
        </li>
        <li>
          Recorvered
          {recovered}
        </li>
      </ul>
    </div>
  );
}

export default Cases;
