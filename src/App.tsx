import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage, NotFoundPage } from './pages';
//import { MenuView } from './pages/OrderPage/MenuView/MenuView';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* <Route path="/menu" element={<MenuView />} /> */}
      <Route path="*" element={<NotFoundPage />} />

    </Routes>
  );
};
