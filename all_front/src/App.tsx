import React from 'react';
import { Routes, Route } from 'react-router-dom';
import RespoRoutes from './RespoRoutes';
// import ProtectedRoute from './ProtectedRoute';
import './SearchSpaces/assets/indexStyle.scss';
import './index.css';
import ConnectRoutes from './ConnectRoutes';
import WebsiteRoutes from './Website_routes';
import UserSpace from './UserSpace';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/*' element={
          //<ProtectedRoute allowUnauthenticated={true}>
            <WebsiteRoutes />
          //</ProtectedRoute>
        } />
        <Route path='/connect/*' element={<ConnectRoutes />} />
        <Route path='/SpaceUser/*' element={<UserSpace />} />
        <Route path="/SeachSpace/*" element={
          //<ProtectedRoute requiredRoles={['admin']}>
            <RespoRoutes />
          //</ProtectedRoute>
        } />
      </Routes>
    </div>
  );
}

export default App;