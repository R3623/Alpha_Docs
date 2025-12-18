// import React, { useContext, useRef, useState, useEffect } from 'react';
// import { AuthContext } from '../../context/AuthContext';

// const AuthStatus: React.FC = () => {
//   const auth = useContext(AuthContext);
//   const boxRef = useRef<HTMLDivElement>(null);
//   const [isDragging, setIsDragging] = useState(false);
//   const [position, setPosition] = useState({ x:5, y:window.innerHeight - 145 });
//   const [offset, setOffset] = useState({ x: 0, y: 0 });

//   const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
//     if (boxRef.current) {
//       const rect = boxRef.current.getBoundingClientRect();
//       setOffset({ x: e.clientX - rect.left, y: e.clientY - rect.top });
//       setIsDragging(true);
//     }
//   };

//   const handleMouseMove = (e: MouseEvent) => {
//     if (isDragging) {
//       setPosition({
//         x: e.clientX - offset.x,
//         y: e.clientY - offset.y,
//       });
//     }
//   };

//   const handleMouseUp = () => {
//     setIsDragging(false);
//   };

//   useEffect(() => {
//     document.addEventListener('mousemove', handleMouseMove);
//     document.addEventListener('mouseup', handleMouseUp);
//     return () => {
//       document.removeEventListener('mousemove', handleMouseMove);
//       document.removeEventListener('mouseup', handleMouseUp);
//     };
//   }, [isDragging, offset]);

//   if (!auth) return <div>Pas de contexte Auth</div>;

//   return (
//     <div
//       ref={boxRef}
//       onMouseDown={handleMouseDown}
//       style={{
//         position: 'fixed',
//         left: position.x,
//         top: position.y,
//         background: '#03363dff',
//         padding: '8px 10px' ,
//         width: '170px',
//         borderRadius: 8,
//         zIndex: 9999,
//         fontSize: 13,
//         color: 'white',
//         cursor: isDragging ? 'grabbing' : 'grab',
//         userSelect: 'none',
//       }}
//     >
//       <b>Connecté:</b> {auth.isAuthenticated ? 'Oui' : 'Non'}<br />
//       <b>Rôle:</b> {auth.role || 'Aucun'}<br />
//       <b>Nom:</b> {auth.userName || 'Non défini'}<br />
//       <b>Service:</b> {auth.service || 'Non défini'}
//     </div>
//   );
// };

// export default AuthStatus;
