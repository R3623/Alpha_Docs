import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import RespoRoutes from './RespoRoutes';
import ProtectedRoute from './ProtectedRoute';
import { AuthProvider, useAuth } from './context/AuthContext';
import './SearchSpaces/assets/indexStyle.scss';
import './index.css';
import ConnectRoutes from './ConnectRoutes';
import WebsiteRoutes from './Website_routes';
import UserSpace from './UserSpace';

function AppRoutes() {
  // const { isAuthenticated, loading } = useAuth();

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  return (
    <Routes>
      {/* <Route path='/' element={
        isAuthenticated ? <Navigate to="/SpaceUser" replace /> : <WebsiteRoutes />
      } /> */}
      <Route path='/connect/*' element={<ConnectRoutes />} />
      <Route path='/SpaceUser/*' element={
        // <ProtectedRoute>
          <UserSpace />
        // </ProtectedRoute>
      } />
      <Route path="/SearchSpace/*" element={
        // <ProtectedRoute>
          <RespoRoutes />
        // </ProtectedRoute>
      } />
      {/* Catch-all route for authenticated users */}
      {/* <Route path='*' element={
        isAuthenticated ? <Navigate to="/SpaceUser" replace /> : <Navigate to="/" replace />
      } /> */}
    </Routes>
  );
}

function App() {
  return (
    <AuthProvider>
      <div className='App'>
        <AppRoutes />
      </div>
    </AuthProvider>
  );
}

export default App;