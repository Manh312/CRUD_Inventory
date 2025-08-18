import { Card, CardActions, CardContent, Typography } from '@mui/material';

interface CustomCardProps {
  label: string;
  value: number | string;
  color: string;
  action?: React.ReactNode;
}

export default function CustomCard({ label, value, color, action }: CustomCardProps) {
  return (
    <Card
      sx={{
        borderTop: `4px solid ${color}`,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderRadius: 3,
        boxShadow: 3,
        transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: 6,
        },
      }}
    >
      <CardContent sx={{ p: { xs: 2, sm: 3 } }}>
        <Typography
          variant="h5"
          fontWeight="bold"
          color={color}
          textAlign="center"
          sx={{ fontSize: { xs: '1.25rem', sm: '1.5rem' } }}
        >
          {label}
        </Typography>
        <Typography
          variant="h6"
          textAlign="center"
          color="text.secondary"
          sx={{ fontSize: { xs: '1rem', sm: '1.25rem' }, mt: 1 }}
        >
          {value} documents
        </Typography>
      </CardContent>

      {action && (
        <CardActions sx={{ p: { xs: 1, sm: 2 }, pt: 0, justifyContent: 'center' }}>
          {action}
        </CardActions>
      )}
    </Card>
  );
}