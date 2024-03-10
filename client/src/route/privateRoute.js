import React from 'react';
import { Route, Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = ({ path, element }) => {
  const userData = localStorage.getItem('userData');
  const isAuthenticated = userData ? true : false;

  return isAuthenticated ? (
    <Route path={path} element={<Outlet />} />
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoute;
