import type { ReactNode } from 'react';
import { Box, Paper } from '@mui/material';

interface PageLayoutProps {
  children: ReactNode;
  maxWidth?: string;
  elevation?: number;
  padding?: { xs: number; sm: number; md: number; lg: number };
  margin?: { xs: number; sm: number; md: number };
}

export default function PageLayout({
  children,
  maxWidth = '1200px',
  elevation = 3,
  padding = { xs: 2, sm: 4, md: 6, lg: 8 },
  margin = { xs: 1, sm: 2, md: 3 },
}: PageLayoutProps) {
  return (
    <Box
      sx={{
        bgcolor: 'grey.100',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        p: { xs: 2, sm: 3, md: 4 },
      }}
    >
      <Paper
        elevation={elevation}
        sx={{
          p: padding,
          m: margin,
          borderRadius: 4,
          maxWidth,
          width: '100%',
          transition: 'transform 0.2s ease-in-out',
          '&:hover': {
            transform: 'translateY(-4px)',
          },
        }}
      >
        {children}
      </Paper>
    </Box>
  );
}