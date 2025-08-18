// src/pages/HomePage.tsx
import { Box, Typography, Stack } from '@mui/material';

export default function HomePage() {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        p: 3,
        marginTop: 30,
      }}
    >
      <Stack spacing={3} maxWidth="600px">
        <Typography variant="h3" fontWeight="bold">
          Welcome to Pet Management 🐾
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Manage your pet inventory, keep track of details, and explore the cutest creatures all in one place.
        </Typography>
      </Stack>
    </Box>
  );
}
