import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Europe() {
  const result = useSelector((state) => state.result);
  const countriesInAsia = result.filter((item) => item.continent === 'Europe');

  return (
    <div>
      <h1>This is Europe</h1>
      <ul>
        {countriesInAsia.map((item) => (
          <li key={item.country}>
            <Link to={`europe/${item.country}`}>{item.country}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Europe;
