import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid } from '@mui/material';
import { getInventory } from '../redux/slices';
import type { RootState, AppDispatch } from '../redux/slices';
import CustomLoadingSpinner from '../components/common/LoadingSpinner';
import CustomEmptyMessage from '../components/common/EmptyMessage';
import CustomErrorMessage from '../components/common/ErrorMessage';
import CustomPageTitle from '../components/common/PageTitle';
import CustomCard from '../components/common/Card';
import CustomButton from '../components/common/Button';
import PageLayout from '../components/layout/PageLayout';

export default function InventoryPage() {
  const dispatch = useDispatch<AppDispatch>();
  const { inventory, loading, error } = useSelector(
    (state: RootState) => state.inventory
  );

  useEffect(() => {
    dispatch(getInventory());
    const intervalId = setInterval(() => {
      dispatch(getInventory());
    }, 10000);
    return () => clearInterval(intervalId);
  }, [dispatch]);

  const cardItems: Array<{
    label: string;
    value: number | undefined;
    color: string;
  }> = [
    { label: 'Sold', value: inventory?.sold, color: '#4caf50' },
    { label: 'Unsold', value: inventory?.unsold, color: '#f44336' },
    { label: 'Pending', value: inventory?.pending, color: '#ff9800' },
    { label: 'Available', value: inventory?.available, color: '#2196f3' },
    { label: 'Not Available', value: inventory?.notAvailable, color: '#9e9e9e' },
    { label: 'Peric', value: inventory?.peric, color: '#673ab7' },
  ];

  return (
    <PageLayout>
      <CustomPageTitle
        title="Inventory Pet Management"
        subtitle="Manage all pets' inventory status"
      />

      {loading && <CustomLoadingSpinner />}

      {error && <CustomErrorMessage message={error} />}

      {!loading && inventory && Object.keys(inventory).length > 0 ? (
        <Grid
          container
          spacing={{ xs: 2, sm: 3, md: 4 }}
          justifyContent="center"
        >
          {cardItems.map((item) => (
            <Grid key={item.label}>
              <CustomCard
                label={item.label}
                value={item.value ?? 0}
                color={item.color}
                action={
                  <CustomButton
                    fullWidth
                    sx={{
                      borderRadius: 2,
                      fontWeight: 'bold',
                      py: 1,
                      bgcolor: item.color,
                      color: 'white',
                      '&:hover': {
                        bgcolor: item.color,
                        opacity: 0.9,
                      },
                    }}
                    to={`/inventory/detail/${item.label.toLowerCase()}`}
                  >
                    View Details
                  </CustomButton>
                }
              />
            </Grid>
          ))}
        </Grid>
      ) : (
        !loading && <CustomEmptyMessage message="No inventory data available." />
      )}
    </PageLayout>
  );
}