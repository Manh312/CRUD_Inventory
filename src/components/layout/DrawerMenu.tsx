// src/components/layout/DrawerMenu.tsx
import { Box, Typography, List, ListItem } from '@mui/material';
import { Link } from 'react-router-dom';
import CustomButton from '../common/CustomButton';
import type { NavItem } from '../../config/navigation';


export default function DrawerMenu({ navItems, onClose }: { navItems: NavItem[], onClose: () => void }) {
    return (
        <Box onClick={onClose} sx={{ textAlign: 'center', p: 2 }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                Pet Management
            </Typography>
            <List sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                {navItems.map((item) => (
                    <ListItem key={item.label} disablePadding sx={{ justifyContent: 'center' }}>
                        <Link key={item.label} to={item.path}>
                            <CustomButton
                                variantKey="success" // bạn có thể đổi thành props để cấu hình
                                fullWidth
                            >
                                {item.label}
                            </CustomButton>
                        </Link>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
}
