// import React from 'react';
// import { Navigate } from 'react-router-dom';
// import { useAuth } from './context/AuthContext';
// import { LuLoaderCircle } from 'react-icons/lu';
// import './assets/LoadStyle.scss';

// interface ProtectedRouteProps {
//   children: React.ReactNode;
//   requiredRoles: string[];
//   allowUnauthenticated?: boolean;
// }

// const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, requiredRoles, allowUnauthenticated = false }) => {
//   const { isAuthenticated, user, loading } = useAuth();

//   if (loading) {
//     return (
//       <div style={{ width: '100%', height: '100vh', display: 'flex', alignItems: 'center' }}>
//         <h1 style={{ width: '500px', margin: 'auto', fontSize: '20px', textAlign: 'center', padding: '10px', borderRadius: '50px', color: 'white' }}>
//           <LuLoaderCircle className='load' />
//           <span className='span' style={{ marginLeft: '20px' }}>Loading...</span>
//         </h1>
//       </div>
//     );
//   }

//   if (isAuthenticated && user && !requiredRoles.includes(user.role)) {
//     return <Navigate to="/connect/" replace />;
//   }

//   if (!allowUnauthenticated && !isAuthenticated) {
//     return <Navigate to="/connect/" replace />;
//   }

//   return <>{children}</>;
// };

// export default ProtectedRoute;
