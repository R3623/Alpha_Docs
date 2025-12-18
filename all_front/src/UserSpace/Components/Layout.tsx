import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout: React.FC = () => {

  return (
    <div className="">
        <Header  />
        <Outlet />
        <Footer />
    </div>
  );
};

export default Layout;
