import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Accommodation from './pages/Accommodation';
import Error from './pages/Error';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/accommodation/:id" element={<Accommodation />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default AppRoutes;
