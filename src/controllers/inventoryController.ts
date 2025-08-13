import { InventoryService } from "../features/inventory/services";
import { InventoryModel } from "../features/inventory/models";

export const InventoryController = {
  async fetchInventory() {
    const dto = await InventoryService.getInventory();
    return new InventoryModel(dto);
  }
};
