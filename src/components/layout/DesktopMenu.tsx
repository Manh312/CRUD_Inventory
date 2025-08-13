// src/components/layout/DesktopMenu.tsx
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import CustomButton from '../common/CustomButton';
import type { DesktopMenuProps } from '../../config/navigation';


export default function DesktopMenu({ navItems }: DesktopMenuProps) {
  return (
    <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
      {navItems.map((item) => (
        <Link key={item.label} to={item.path}>
          <CustomButton variantKey={'success'}>{item.label}</CustomButton>
        </Link>
      ))}
    </Box>
  );
}
