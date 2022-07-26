import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../redux/api';

function FetchApi({ continent }) {
  const result = useSelector((state) => state.result);
  const dispatch = useDispatch();
  dispatch(fetchData(continent));

  return (
    <div>
      <h1>{continent}</h1>
      <ul>
        {result.map((item) => (
          <li key={item.country}>
            <Link to={`${item.country}`} id={result.indexOf(item)}>{item.country}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FetchApi;
