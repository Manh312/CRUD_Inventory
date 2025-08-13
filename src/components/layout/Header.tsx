import { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Drawer } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { NAV_ITEMS } from '../../config/navigation';
import DrawerMenu from './DrawerMenu';
import DesktopMenu from './DesktopMenu';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <AppBar position="static" color="primary">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography variant="h6">Pet Management</Typography>
          <DesktopMenu navItems={NAV_ITEMS} buttonVariant="success" />
          <IconButton
            color="inherit"
            edge="end"
            onClick={() => setMobileOpen(true)}
            sx={{ display: { xs: 'block', md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { width: 240 },
        }}
      >
        <DrawerMenu navItems={NAV_ITEMS} onClose={() => setMobileOpen(false)} />
      </Drawer>
    </>
  );
}
