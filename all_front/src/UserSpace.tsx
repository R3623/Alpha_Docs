import React from 'react';
import { Routes, Route } from 'react-router-dom';

// import Layout from './SearchSpaces/components/Layout';
// import { AccueilDash } from './SearchSpaces/pages/AccueilDash';
import Layout from './UserSpace/Components/Layout';
import AccueilSearch from './UserSpace/Pages/AccueilSearch';

const UserSpace: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<AccueilSearch />} />
        {/* <Route path="Messages" element={<Messages />} /> */}
      </Route>
    </Routes>
  );
};

export default UserSpace;
