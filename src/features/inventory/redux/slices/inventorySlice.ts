import { createAsyncThunk, createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { InventoryModel } from '../../models/Inventory';
import { InventoryService } from '../../services/inventoryService';

interface InventoryState {
  inventory: InventoryModel | null;
  loading: boolean;
  error: string | null;
}

const initialState: InventoryState = {
  inventory: null,
  loading: false,
  error: null,
};

export const getInventoryStats = createAsyncThunk(
  'inventory/getInventory',
  async () => {
    return await InventoryService.getInventory();
  }
);

const inventorySlice = createSlice({
  name: 'inventory',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getInventoryStats.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getInventoryStats.fulfilled, (state, action: PayloadAction<InventoryModel>) => {
        state.loading = false;
        state.inventory = action.payload;
      })
      .addCase(getInventoryStats.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'Something went wrong';
      });
  },
});

export default inventorySlice.reducer;
