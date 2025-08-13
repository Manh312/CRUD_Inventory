import { Typography, Box } from '@mui/material';

interface PageTitleProps {
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
}

export default function CustomPageTitle({ title, subtitle }: PageTitleProps) {
  return (
    <Box mb={3} display="flex" flexDirection="column" gap={0.5}>
      <Box display="flex" alignItems="center" gap={1}>
        <Typography variant="h4" fontWeight="bold">
          {title}
        </Typography>
      </Box>
      {subtitle && (
        <Typography variant="subtitle1" color="text.secondary">
          {subtitle}
        </Typography>
      )}
    </Box>
  );
}
