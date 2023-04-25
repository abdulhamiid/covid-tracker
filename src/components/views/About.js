import React from 'react';
import { FaGithub } from 'react-icons/fa';
import Nav from './Nav';

function About() {
  return (
    <>
      <Nav />
      <div className="aboutPage">
        <h1>Developed by Abdulhamid</h1>
        <p>
          <a href="https://github.com/abdulhamiid/covid-19" target="_blank" rel="noreferrer">
            view source
            <FaGithub />
          </a>
        </p>
      </div>
    </>
  );
}

export default About;
