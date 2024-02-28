import React from 'react';
import {Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';


const AppRoutes = () => {
  return (
      <Routes>
        <Route path={ROUTES.HOME} element={<HomePage />} />
      </Routes>
  );
};

export default AppRoutes;