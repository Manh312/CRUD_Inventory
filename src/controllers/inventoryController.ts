import { InventoryService } from "../services";
import { InventoryModel } from "../models";

export const InventoryController = {
  async fetchInventory() {
    const dto = await InventoryService.getInventory();
    return new InventoryModel(dto);
  }
};
