import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

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
    id: 6,
    route: 'australia-oceania',
    name: 'Australia Oceania',
    numberOfCountries: 19,
  },
];

function Home() {
  return (
    <div className={styles.homePage}>
      <h1 className={styles.homeHeader}>
        COVID-19
      </h1>
      <ul className={styles.continents}>
        {continent.map((item) => (
          <li key={item.id} className={styles.continent}>
            <div className={`box ${item.route}`}>
              <div className="overlay">
                <Link to={item.route} exact="true" className="dataPage">
                  <h2>{item.name}</h2>
                  <p>
                    {item.numberOfCountries}
                    {' '}
                    Countries
                  </p>
                </Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
