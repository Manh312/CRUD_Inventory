export interface InventoryResponseDto {
  sold: number;
  unsold: number;
  pending: number;
  available: number;
  notAvailable: number; // camelCase chuẩn TypeScript
  peric: number;
}
