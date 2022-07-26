import React from 'react';
import { Link } from 'react-router-dom';

const continent = [
  {
    id: 1,
    route: 'africa',
    name: 'Africa',
    numberOfCountries: 58,
  },
  {
    id: 2,
    route: 'asia',
    name: 'Asia',
    numberOfCountries: 50,
  },
  {
    id: 3,
    route: 'europe',
    name: 'Europe',
    numberOfCountries: 48,
  },
  {
    id: 4,
    route: 'north-america',
    name: 'North America',
    numberOfCountries: 39,
  },
  {
    id: 5,
    route: 'south-america',
    name: 'South America',
    numberOfCountries: 14,
  },
  {
    id: 5,
    route: 'australia-oceania',
    name: 'Australia Oceania',
    numberOfCountries: 19,
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
          <li key={item.id}>
            <Link to={item.route} exact="true">
              <h2>{item.name}</h2>
              <p>
                {item.numberOfCountries}
                {' '}
                Countries
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
