import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function AustraliaOceania() {
  const result = useSelector((state) => state.result);
  const countriesInAustraliaOceania = result.filter((item) => item.continent === 'Australia Oceania');

  return (
    <div>
      <h1>This is AustraliaOceania</h1>
      <ul>
        {countriesInAustraliaOceania.map((item) => (
          <li key={item.country}>
            <Link to={`australia-oceania/${item.country}`}>{item.country}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AustraliaOceania;
