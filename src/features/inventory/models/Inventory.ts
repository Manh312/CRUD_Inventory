import type { InventoryResponseDto } from "../models";

export class InventoryModel {
  sold: number;
  unsold: number;
  pending: number;
  available: number;
  notAvailable: number;
  peric: number;

  constructor(data: InventoryResponseDto) {
    this.sold = data.sold;
    this.unsold = data.unsold;
    this.pending = data.pending;
    this.available = data.available;
    this.notAvailable = data.notAvailable;
    this.peric = data.peric;
  }
}
