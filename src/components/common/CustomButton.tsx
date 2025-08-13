import { Button, type ButtonProps } from '@mui/material';
import { buttonColors } from '../../theme/colors';

interface CustomButtonProps extends ButtonProps {
  variantKey?: keyof typeof buttonColors; // 'primary' | 'success' | ...
}

export default function CustomButton({
  variantKey = 'primary',
  ...props
}: CustomButtonProps) {
  const { bg, hover } = buttonColors[variantKey];

  return (
    <Button
      variant="contained"
      size="medium"
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
