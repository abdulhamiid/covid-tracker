import React from 'react';
import PropTypes from 'prop-types';
import styles from './Pagination.module.css';

const Pagination = ({ itemPerPage, totalItem, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItem / itemPerPage); i += 1) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul className={`flex ${styles.footer}`}>
        {pageNumbers.map((number) => (
          <li key={number}>
            <button type="button" onClick={() => paginate(number)} href="#" className={`flex ${styles.paginateBtn}`}>{number}</button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  itemPerPage: PropTypes.number.isRequired,
  totalItem: PropTypes.number.isRequired,
  paginate: PropTypes.func.isRequired,
};

export default Pagination;
