import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import { NAV_ITEMS } from '../config/navigation';

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
    </Routes>
    </BrowserRouter>
  );
}
