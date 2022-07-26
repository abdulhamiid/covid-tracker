import React from 'react';
import { Link } from 'react-router-dom';

const continent = [
  {
    id: 1,
    name: 'africa',
    numberOfCountries: 54,
  },
  {
    id: 2,
    name: 'asia',
    numberOfCountries: 30,
  },
  {
    id: 3,
    name: 'europe',
    numberOfCountries: 5,
  },
  {
    id: 4,
    name: 'north-ameria',
    numberOfCountries: 22,
  },
  {
    id: 5,
    name: 'south America',
    numberOfCountries: 54,
  },
  {
    id: 5,
    name: 'australia-oceania',
    numberOfCountries: 54,
  },
];

function Home() {
  return (
    <div>
      <h1>
        Countries all over the world
      </h1>
      <ul>
        {continent.map((item) => (
          <li key={item.name}>
            <Link to={item.name}>
              <h2>{item.name}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
