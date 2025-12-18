import React, { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';
import '../assets/Layout.scss';

const Layout: React.FC = () => {

  return (
    <div className="layout">
      <div className='layoutContent'>
        <div className="sdbr">
          <Sidebar/>
        </div>
        <main style={{ flex: 1, padding: '0' , position: 'relative'}}>
          <Header />
          <div className="outl">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
