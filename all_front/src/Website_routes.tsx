import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Website/Componesnts/Layout';
import { AccueilPage } from './Website/Page';
import StudentSpace from './Website/Page/StudentSpace';
import TeacherSpace from './Website/Page/TeacherSpace';


const WebsiteRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<AccueilPage />} />
        <Route path='/StudentSpace' element={<StudentSpace />} />
        <Route path='/TeacherSpace' element={<TeacherSpace />} />
      </Route>
    </Routes>
  );
};

export default WebsiteRoutes;
