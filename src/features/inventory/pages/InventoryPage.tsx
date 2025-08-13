import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Paper, Grid } from '@mui/material';
import { getInventory } from '../redux/slices';
import type { RootState, AppDispatch } from '../redux/slices';
import CustomLoadingSpinner from '../../../components/common/CustomLoadingSpinner';
import CustomEmptyMessage from '../../../components/common/CustomEmptyMessage';
import CustomErrorMessage from '../../../components/common/CustomErrorMessage';
import CustomPageTitle from '../../../components/common/CustomPageTitle';
import CustomCard from '../../../components/common/CustomCard';

export default function InventoryPage() {
  const dispatch = useDispatch<AppDispatch>();
  const { inventory, loading, error } = useSelector(
    (state: RootState) => state.inventory
  );

  useEffect(() => {
    // Gọi API ngay khi component mount
    dispatch(getInventory());

    // Thiết lập interval để gọi API mỗi 10 giây
    const intervalId = setInterval(() => {
      dispatch(getInventory());
    }, 10000); // 10 giây = 10000ms

    // Dọn dẹp interval khi component unmount
    return () => clearInterval(intervalId);
  }, [dispatch]);

  const cardItems = [
    { label: 'Sold', value: inventory?.sold, color: '#4caf50' },
    { label: 'Unsold', value: inventory?.unsold, color: '#f44336' },
    { label: 'Pending', value: inventory?.pending, color: '#ff9800' },
    { label: 'Available', value: inventory?.available, color: '#2196f3' },
    { label: 'Not Available', value: inventory?.notAvailable, color: '#9e9e9e' },
    { label: 'Peric', value: inventory?.peric, color: '#673ab7' },
  ];

  return (
    <Paper
      sx={{
        p: { xs: 2, sm: 4, md: 6, lg: 10 }, // Giảm padding trên màn hình nhỏ
        marginTop: { xs: 2, sm: 3, md: 5 }, // Giảm margin trên màn hình nhỏ
        mx: { xs: 1, sm: 2 }, // Thêm margin ngang để tránh sát lề
      }}
    >
      <CustomPageTitle
        title="Inventory Pet Management"
        subtitle="Manage all pets' inventory status"
      />

      {loading && <CustomLoadingSpinner />}

      {error && <CustomErrorMessage message={error} />}

      {!loading && inventory && Object.keys(inventory).length > 0 ? (
        <Grid container spacing={{ xs: 1, sm: 2, md: 3 }} justifyContent="center">
          {cardItems.map((item) => (
            <Grid key={item.label}>
              <CustomCard
                label={item.label}
                value={item.value ?? 0}
                color={item.color}
              />
            </Grid>
          ))}
        </Grid>
      ) : (
        !loading && <CustomEmptyMessage message="No inventory data available." />
      )}
    </Paper>
  );
}