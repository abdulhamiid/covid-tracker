import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { BsArrowRightCircle } from 'react-icons/bs';
import styles from './FetchApi.module.css';
import Nav from './Nav';
import Search from './Search';

function FetchApi({ continent }) {
  const [query, setQuery] = useState('');

  const onSearch = (event) => {
    setQuery(event.target.value);
  };

  const result = useSelector((state) => state.data);
  const newData = result.filter((item) => item.continent === continent);

  const filteredResult = newData.filter((item) => (
    item.country.toLowerCase().includes(query.toLowerCase())
  ));

  return (
    <div className={styles.wrapper}>
      <Nav />
      <Search query={query} onSearch={onSearch} />
      <div className={styles.headerOne}>
        <div>
          <img alt="asia" src="../src/components/img/asia.png" />
        </div>
        <div>
          <h1>{continent}</h1>
          <p>x views</p>
        </div>
      </div>

      <div className={styles.headerTwo}>
        <h2>STATS BY COUNTRY</h2>
      </div>
      <ul className={styles.listWrapper}>
        {filteredResult.map((item) => (
          <li key={item.country} className={styles.countryName}>
            <Link to={`/cases/${item.country}`} id={newData.indexOf(item)} exact="true">
              <BsArrowRightCircle />
            </Link>
            <div>
              <h4>{item.country}</h4>
              <p>{`${item.cases.toLocaleString()} cases`}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

FetchApi.propTypes = {
  continent: PropTypes.string.isRequired,
};

export default FetchApi;
