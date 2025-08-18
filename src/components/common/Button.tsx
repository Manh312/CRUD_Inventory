import { Button, type ButtonProps } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { buttonColors } from '../../theme/colors';

interface CustomButtonProps extends ButtonProps {
  variantKey?: keyof typeof buttonColors; // 'primary' | 'success' | ...
  to?: string;
}

export default function CustomButton({
  variantKey = 'primary',
  to,
  ...props
}: CustomButtonProps) {
  const { bg, hover } = buttonColors[variantKey];

  return (
    <Button
      variant="contained"
      size="medium"
      component={to ? RouterLink : 'button'}
      to={to}
      sx={{
        borderRadius: 2,
        textTransform: 'none',
        boxShadow: 'none',
        backgroundColor: bg,
        cursor: 'pointer',
        ':hover': {
          boxShadow: '0px 3px 6px rgba(0,0,0,0.2)',
          backgroundColor: hover,
        },
      }}
      {...props}
    />
  );
}
