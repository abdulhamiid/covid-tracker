import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/views/Home';
import About from './components/views/About';
import NotMatch from './components/views/NotMatch';
import Africa from './components/routes/Africa';
import Asia from './components/routes/Asia';
import Europe from './components/routes/Europe';
import NorthAmerica from './components/routes/NorthAmerica';
import SouthAmerica from './components/routes/SouthAmerica';
import AustraliaOcenia from './components/routes/AustraliaOceania';
import Cases from './components/views/Cases';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="cases" element={<Cases />} />
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
