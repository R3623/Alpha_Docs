import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
//import AuthStatus from './AuthStatus';

const Layout: React.FC = () => {
  const [showMsgListes, setShowMsgListes] = useState(false);

  const handleShowMessages = () => {
    setShowMsgListes(true);
  };

  return (
    <div className="layouts">
        <main>
          <Outlet />
        </main>
        {/* <AuthStatus /> */}
    </div>
  );
};

export default Layout;
