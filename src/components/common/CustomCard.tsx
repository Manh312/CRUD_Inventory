import { Card, CardContent, Typography } from '@mui/material';

interface CustomCardProps {
  label: string;
  value: number | string;
  color: string;
}

export default function CustomCard({ label, value, color }: CustomCardProps) {
  return (
    <Card sx={{ borderTop: `4px solid ${color}` }}>
      <CardContent>
        <Typography variant="h6">{label}</Typography>
        <Typography variant="h4" fontWeight="bold" color={color}>
          {value}
        </Typography>
      </CardContent>
    </Card>
  );
}
