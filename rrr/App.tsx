import { Routes, Route } from 'react-router-dom';
import { HomePage, NotFoundPage, OrderPage } from './pages';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/order" element={<OrderPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
