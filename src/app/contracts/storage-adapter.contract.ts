export interface StorageAdapterContract {
  get(key: string, id?: number): Promise<any>;
  add(data: any, key: string): Promise<any>;
  edit(id: number, data: any, key: string): Promise<any>;
  delete(data: any, key: string): Promise<any>;
}
