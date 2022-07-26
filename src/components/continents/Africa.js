import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCountry, fetchData } from '../redux/api';

function Africa() {
  const result = useSelector((state) => state.result);
  const dispatch = useDispatch();
  dispatch(fetchData('Africa'));

  const handleClick = (e) => {
    dispatch(fetchCountry(e.target.id));
  };

  return (
    <div>
      <h1>This is Africa</h1>
      <ul>
        {result.map((item) => (
          <li key={item.country}>
            <Link to={`africa/${item.country}`} onClick={handleClick} id={result.indexOf(item)}>{item.country}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Africa;
