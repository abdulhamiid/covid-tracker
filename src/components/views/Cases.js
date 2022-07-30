import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
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
