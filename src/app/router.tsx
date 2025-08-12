import { BrowserRouter, Route, Routes } from 'react-router-dom';
import InventoryPage from '../features/inventory/pages/InventoryPage';
import MainLayout from '../components/layout/MainLayout';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={
        <MainLayout>
          <InventoryPage />
        </MainLayout>
      } />
    </Routes>
    </BrowserRouter>
  );
}
