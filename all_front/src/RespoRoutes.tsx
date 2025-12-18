import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './SearchSpaces/components/Layout';
import { AccueilDash } from './SearchSpaces/pages/AccueilDash';
import Messages from './SearchSpaces/pages/Messages';
import Chart from './SearchSpaces/pages/Chart';
import Membres from './SearchSpaces/pages/Membres';
import Calendar from './SearchSpaces/pages/Calendar';
import Aide from './SearchSpaces/pages/Aide';
import Settings from './SearchSpaces/pages/Settings';

const RespoRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<AccueilDash />} />
        <Route path="Messages" element={<Messages />} />
        <Route path="Chart" element={<Chart />} />
        <Route path="Membres" element={<Membres />} />
        <Route path="Calendar" element={<Calendar />} />
        <Route path="Aide" element={<Aide />} />
        <Route path="Settings" element={<Settings />} />
      </Route>
    </Routes>
  );
};

export default RespoRoutes;
