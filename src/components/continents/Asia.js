import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Asia() {
  const result = useSelector((state) => state.result);
  const countriesInAsia = result.filter((item) => item.continent === 'Asia');

  return (
    <div>
      <h1>This is Asia</h1>
      <ul>
        {countriesInAsia.map((item) => (
          <li key={item.country}>
            <Link to={`asia/${item.country}`}>{item.country}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Asia;
