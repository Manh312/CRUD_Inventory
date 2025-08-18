import { Box, Typography, List, ListItem, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import CustomButton from '../common/Button';
import type { NavItem } from '../../config/navigation';

interface DrawerMenuProps {
  navItems: NavItem[];
  onClose: () => void;
}

export default function DrawerMenu({ navItems, onClose }: DrawerMenuProps) {
  return (
    <Box
      sx={{
        textAlign: 'center',
        p: { xs: 2, sm: 3 }, // Giảm padding trên màn hình nhỏ
        bgcolor: 'background.paper',
        minWidth: { xs: '30vw', sm: '20vw', md: '20vw' }, // Responsive width
        maxWidth: '400px',
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 'bold',
            color: 'primary.main',
            fontSize: { xs: '1.2rem' }, // Responsive font size
          }}
        >
          Pet Management
        </Typography>
        <IconButton onClick={onClose} aria-label="close menu">
          <CloseIcon sx={{ color: 'text.primary', fontSize: { xs: '1.2rem' } }} />
        </IconButton>
      </Box>
      <List sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 1 } }}>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding sx={{ justifyContent: 'center' }}>
            <Link to={item.path} style={{ textDecoration: 'none', width: '5 0%' }}>
              <CustomButton
                variantKey="success"// Hỗ trợ variantKey từ navItems
                fullWidth
                sx={{
                  py: { xs: 1, sm: 1.5 }, // Responsive padding dọc
                  fontSize: { xs: '0.9rem', sm: '1rem' }, // Responsive font size
                  borderRadius: '8px', // Bo góc nhẹ
                  textTransform: 'none', // Không viết hoa chữ
                  '&:hover': {
                    bgcolor: 'primary.light',
                    transform: 'translateY(-2px)', // Hiệu ứng nổi khi hover
                    transition: 'all 0.2s ease-in-out',
                  },
                }}
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