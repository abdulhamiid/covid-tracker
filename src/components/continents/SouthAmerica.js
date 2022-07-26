import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function SouthAmerica() {
  const result = useSelector((state) => state.result);
  const countriesInSouthAmerica = result.filter((item) => item.continent === 'South America');

  return (
    <div>
      <h1>This is SouthAmerica</h1>
      <ul>
        {countriesInSouthAmerica.map((item) => (
          <li key={item.country}>
            <Link to={`south-america/${item.country}`}>{item.country}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SouthAmerica;
