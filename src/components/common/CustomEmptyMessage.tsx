import { Box, Typography } from '@mui/material';

interface EmptyStateProps {
  message?: string;
}

export default function CustomEmptyMessage({ message = 'No data available.' }: EmptyStateProps) {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" py={4}>
      <Typography variant="body1" color="text.secondary">
        {message}
      </Typography>
    </Box>
  );
}
