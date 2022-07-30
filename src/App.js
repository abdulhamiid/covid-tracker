import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/views/Home';
import About from './components/views/About';
import NotMatch from './components/views/NotMatch';
import Cases from './components/views/Cases';
import SingleContinent from './components/views/SingleContinent';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/continent/:continentId" element={<SingleContinent />} />
        <Route path="/cases/:countryId" element={<Cases />} />
        <Route path="*" element={<NotMatch />} />
      </Routes>
    </>
  );
}

export default App;
