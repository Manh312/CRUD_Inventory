import { Box, CircularProgress } from '@mui/material';

export default function CustomLoadingSpinner() {
  return (
    <Box display="flex" justifyContent="center" py={4}>
      <CircularProgress />
    </Box>
  );
}
