import axios from "axios";
import type { InventoryResponseDto } from "../models/inventoryResponseDto";

const API_URL = import.meta.env.VITE_API_URL;

export const InventoryService = {
  async getInventory(): Promise<InventoryResponseDto> {
    const response = await axios.get(`${API_URL}/store/inventory`);
    const raw = response.data;

    return {
      sold: raw.sold ?? 0,
      unsold: raw.unsold ?? 0,
      pending: raw.pending ?? 0,
      available: raw.available ?? 0,
      notAvailable: raw["not available"] ?? 0,
      peric: raw.peric ?? 0
    };
  }
};
