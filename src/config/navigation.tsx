import type { JSX } from "react";
import HomePage from "../pages/HomePage";
import InventoryPage from "../pages/InventoryPage";



// src/config/navigation.ts
export type NavItem = {
    label: string;
    path: string;
    element: JSX.Element;
};

export interface DesktopMenuProps {
  navItems: NavItem[];
  buttonVariant: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/', element: <HomePage/> },
  { label: 'Pet Inventory', path: '/inventory', element: <InventoryPage/> },
];
