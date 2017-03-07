import { Injectable, Inject } from '@angular/core';
import { StorageAdapterContract } from '../contracts/storage-adapter.contract';

@Injectable()
export class StorageService {
  constructor(
    @Inject('StorageAdapter') public storageAdapter: StorageAdapterContract) { }

  add(data: Object): void {
    this.storageAdapter.add(data);
  }
}