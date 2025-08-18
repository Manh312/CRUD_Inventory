export interface InventoryResponseDto {
  sold: number;
  unsold: number;
  pending: number;
  available: number;
  notAvailable: number; // camelCase chuẩn TypeScript
  peric: number;
}

// export interface InventoryDetailResponseDto {
//   items: Array<{ id: string; description: string; [key: string]: unknown }>;
//   totalCount: number;
// }
