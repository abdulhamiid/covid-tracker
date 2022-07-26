import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/views/Home';
import About from './components/views/About';
import NotMatch from './components/views/NotMatch';
import Nav from './components/views/Nav';
import Africa from './components/continents/Africa';
import Asia from './components/continents/Asia';
import Europe from './components/continents/Europe';
import NorthAmerica from './components/continents/NorthAmerica';
import SouthAmerica from './components/continents/SouthAmerica';
import AustraliaOcenia from './components/continents/AustraliaOceania';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/africa" element={<Africa />} />
        <Route path="/asia" element={<Asia />} />
        <Route path="/europe" element={<Europe />} />
        <Route path="/north-america" element={<NorthAmerica />} />
        <Route path="/south-america" element={<SouthAmerica />} />
        <Route path="/australia-oceania" element={<AustraliaOcenia />} />
        <Route path="*" element={<NotMatch />} />
      </Routes>
    </>

  );
}

export default App;
