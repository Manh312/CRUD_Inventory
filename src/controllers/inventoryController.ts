import { InventoryService } from "../features/inventory/services/inventoryService";
import { InventoryModel } from "../features/inventory/models/Inventory";

export const InventoryController = {
  async fetchInventory() {
    const dto = await InventoryService.getInventory();
    return new InventoryModel(dto);
  }
};
