import React from 'react';
import { useParams } from 'react-router-dom';
import FetchApi from './FetchApi';
import Nav from './Nav';

const SingleContinent = () => {
  const { continentId } = useParams();
  const result = continentId.split('-');

  for (let i = 0; i < result.length; i += 1) {
    result[i] = result[i][0].toUpperCase() + result[i].slice(1);
  }

  let continent;
  if (result.indexOf('Australia') === -1) {
    continent = result.join(' ');
  } else {
    continent = result.join('-');
  }

  return (
    <>
      <Nav />
      <FetchApi continent={continent} />
    </>
  );
};

export default SingleContinent;
