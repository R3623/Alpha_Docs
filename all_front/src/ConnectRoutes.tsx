import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './Connexion/Components/Layout';
import Login from './Connexion/Pages/Login';
import Register from './Connexion/Pages/Register';

const ConnectRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Login />} />
        <Route path="Register" element={<Register />} />
      </Route>
    </Routes>
  );
};

export default ConnectRoutes;
