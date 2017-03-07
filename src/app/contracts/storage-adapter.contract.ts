export interface StorageAdapterContract {
  add(data: Object): void;
  edit(id: number, data: Object): void;
  delete(id: number): void;
}