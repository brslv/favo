export interface StorageAdapterContract {
  add(data: any, key: string): void;
  edit(id: number, data: any, key: string): void;
  delete(data: any, key: string): void;
}