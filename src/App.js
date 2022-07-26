import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/views/Home';
import NotMatch from './components/views/NotMatch';
import Nav from './components/views/Nav';
import Africa from './components/continents/Africa';
import Asia from './components/continents/Asia';
import Europe from './components/continents/Europe';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/africa" element={<Africa />} />
        <Route path="/asia" element={<Asia />} />
        <Route path="/europe" element={<Europe />} />
        {/* <Route path="nestedOne" element={<NestedAbout />} />
          <Route path="nestedTwo" element={<NestedAbout2 />} /> */}
        <Route path="*" element={<NotMatch />} />
      </Routes>
    </>

  );
}

export default App;
