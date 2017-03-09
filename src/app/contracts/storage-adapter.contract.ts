export interface StorageAdapterContract {
  get(key: string, id?: number): any[];
  add(data: any, key: string): any;
  edit(id: number, data: any, key: string): void;
  delete(data: any, key: string): void;
}