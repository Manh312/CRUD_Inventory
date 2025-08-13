import { Alert, Box } from '@mui/material';

interface ErrorMessageProps {
  message: string;
}

export default function CustomErrorMessage({ message }: ErrorMessageProps) {
  if (!message) return null;
  return (
    <Box py={2}>
      <Alert severity="error">{message}</Alert>
    </Box>
  );
}
