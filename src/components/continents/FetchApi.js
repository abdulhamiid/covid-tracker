import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCountry } from '../redux/fetchCases';
import Pagination from '../views/Pagination';
import styles from './FetchApi.module.css';
import Nav from '../views/Nav';
import arrow from '../img/arrow.png';

function FetchApi({ continent }) {
  const result = useSelector((state) => state.data);
  const newData = result.filter((item) => item.continent === continent);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemPerPage] = useState(6);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    const { id } = e.target.parentElement;
    dispatch(fetchCountry(continent, id));
  };

  const indexOfLastItem = currentPage * itemPerPage;
  const indexOfFirstItem = indexOfLastItem - itemPerPage;
  const currentResult = newData.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className={styles.wrapper}>
      <Nav />
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
                <p>{`${item.cases} cases`}</p>
                <Link to="/cases" id={newData.indexOf(item)} onClick={handleClick} exact="true">
                  <img src={arrow} alt="arrow" className="arrow" />
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
