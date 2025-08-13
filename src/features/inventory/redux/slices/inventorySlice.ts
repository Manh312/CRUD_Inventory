import { createAsyncThunk, createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { InventoryModel } from '../../models';
import { InventoryService } from '../../services';

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

export const getInventory = createAsyncThunk(
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
      .addCase(getInventory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getInventory.fulfilled, (state, action: PayloadAction<InventoryModel>) => {
        state.loading = false;
        state.inventory = action.payload;
      })
      .addCase(getInventory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'Something went wrong';
      });
  },
});

export default inventorySlice.reducer;
