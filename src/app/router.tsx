import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import { NAV_ITEMS } from '../config/navigation';
import InventoryDetailPage from '../pages/InventoryDetailPage';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
      {NAV_ITEMS.map(({ path, element }) => (
          <Route
            key={path}
            path={path}
            element={<MainLayout>{element}</MainLayout>}
          />
        ))}
        <Route
          path="/inventory/detail/:label"
          element={<MainLayout><InventoryDetailPage /></MainLayout>}
        />
        <Route
          path="*"
          element={<MainLayout><div>Page Not Found</div></MainLayout>}
        />
    </Routes>
    </BrowserRouter>
  );
}
