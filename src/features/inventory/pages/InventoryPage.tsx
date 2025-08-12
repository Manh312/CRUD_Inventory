import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '../redux/store';
import { getInventoryStats } from '../redux/slices/inventorySlice';

const InventoryStats = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { inventory, loading, error } = useSelector((state: RootState) => state.inventory);

  useEffect(() => {
    dispatch(getInventoryStats());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;
  if (!inventory) return <p>No data</p>;

  return (
    <div>
      <h2>Inventory Stats</h2>
      <ul>
        <li>Sold: {inventory.sold}</li>
        <li>Unsold: {inventory.unsold}</li>
        <li>Pending: {inventory.pending}</li>
        <li>Available: {inventory.available}</li>
        <li>Not Available: {inventory.notAvailable}</li>
        <li>Peric: {inventory.peric}</li>
      </ul>
    </div>
  );
};

export default InventoryStats;
