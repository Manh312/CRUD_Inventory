import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Typography, Paper, Box, Card, CardContent, CircularProgress, Alert, Grid } from '@mui/material';
import { getInventory } from '../redux/slices';
import type { RootState, AppDispatch } from '../redux/slices';
import CustomLoadingSpinner from '../../../components/common/CustomLoadingSpinner';
import CustomEmptyMessage from '../../../components/common/CustomEmptyMessage';
import CustomErrorMessage from '../../../components/common/CustomErrorMessage';
import CustomPageTitle from '../../../components/common/CustomPageTitle';

export default function InventoryPage() {
  const dispatch = useDispatch<AppDispatch>();
  const { inventory, loading, error } = useSelector((state: RootState) => state.inventory);

  useEffect(() => {
    dispatch(getInventory());
  }, [dispatch]);

  return (
    <Paper sx={{ p: 3 }}>
      <CustomPageTitle
        title="Inventory Pet Management"
        subtitle="Manage all pets' inventory status"
      />

      {loading && <CustomLoadingSpinner />}

      {error && <CustomErrorMessage message={error} />}

      {!loading && inventory && Object.keys(inventory).length > 0 ? (
        <Grid container spacing={2}>
          {[
            { label: 'Sold', value: inventory.sold, color: '#4caf50' },
            { label: 'Unsold', value: inventory.unsold, color: '#f44336' },
            { label: 'Pending', value: inventory.pending, color: '#ff9800' },
            { label: 'Available', value: inventory.available, color: '#2196f3' },
            { label: 'Not Available', value: inventory.notAvailable, color: '#9e9e9e' },
            { label: 'Peric', value: inventory.peric, color: '#673ab7' },
          ].map((item) => (
            <Grid key={item.label}>
              <Card sx={{ borderTop: `4px solid ${item.color}` }}>
                <CardContent>
                  <Typography variant="h6">{item.label}</Typography>
                  <Typography variant="h4" fontWeight="bold" color={item.color}>
                    {item.value}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      ) : (
        !loading && <CustomEmptyMessage message='No inventory data available.' />
      )}
    </Paper>
  );
}
