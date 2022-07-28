import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../redux/api';
import { fetchCountry } from '../redux/fetchCases';
import Pagination from '../views/Pagination';
import styles from './FetchApi.module.css';

function FetchApi({ continent }) {
  const result = useSelector((state) => state.result);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemPerPage] = useState(6);
  const dispatch = useDispatch();
  dispatch(fetchData(continent));

  const handleClick = (e) => {
    const { id } = e.target;
    dispatch(fetchCountry(continent, id));
  };

  const indexOfLastItem = currentPage * itemPerPage;
  const indexOfFirstItem = indexOfLastItem - itemPerPage;
  const currentResult = result.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className={styles.wrapper}>
      <div>
        <h1>{continent}</h1>
        <ul className={styles.wrapperUL}>
          {currentResult.map((item) => (
            <li key={item.country} className={`flex ${styles.countryName}`}>
              <Link to="/cases" id={result.indexOf(item)} onClick={handleClick} exact="true">{item.country}</Link>
            </li>
          ))}
        </ul>
      </div>
      <Pagination itemPerPage={itemPerPage} totalItem={result.length} paginate={paginate} />
    </div>
  );
}

FetchApi.propTypes = {
  continent: PropTypes.string.isRequired,
};

export default FetchApi;
