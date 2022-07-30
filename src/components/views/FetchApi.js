import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { BsArrowRightCircle } from 'react-icons/bs';
import Pagination from './Pagination';
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


  const [currentPage, setCurrentPage] = useState(1);
  const [itemPerPage] = useState(5);

  // pagination
  const indexOfLastItem = currentPage * itemPerPage;
  const indexOfFirstItem = indexOfLastItem - itemPerPage;
  const currentResult = filteredResult.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  
  return (
    <div className={styles.wrapper}>
      <Nav />
      <Search query={query} onSearch={onSearch} />
      <div>
        <h1>{continent}</h1>
        <div>
          <h3>List of Countries</h3>
          <h3>Covid-19 Stat</h3>
        </div>
        <ul className={styles.wrapperUL}>
          {currentResult.map((item) => (
            <li key={item.country} className={styles.countryName}>
              <h4>{item.country}</h4>
              <div>
                <p>{`${item.cases.toLocaleString()} cases`}</p>
                <Link to={`/cases/${item.country}`} id={newData.indexOf(item)} exact="true">
                  <BsArrowRightCircle />
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <Pagination itemPerPage={itemPerPage} totalItem={newData.length} paginate={paginate} />
    </div>
  );
}

FetchApi.propTypes = {
  continent: PropTypes.string.isRequired,
};

export default FetchApi;
