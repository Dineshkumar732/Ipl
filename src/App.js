import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import TeamMatches from './components/TeamMatches';
import NotFound from './components/NotFound';
import Header from './components/Header';

const App = () => (
  <div>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/team-matches/:id" element={<TeamMatches />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </div>
);

export default App;
