import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function NorthAmerica() {
  const result = useSelector((state) => state.result);
  const countriesInNorthAmerica = result.filter((item) => item.continent === 'North America');

  return (
    <div>
      <h1>This is NorthAmerica</h1>
      <ul>
        {countriesInNorthAmerica.map((item) => (
          <li key={item.country}>
            <Link to={`north-america/${item.country}`}>{item.country}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NorthAmerica;
