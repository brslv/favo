import { Injectable } from '@angular/core';
import { StorageAdapterContract } from '../../contracts/storage-adapter.contract';

@Injectable()
export class LocalStorageAdapterService implements StorageAdapterContract {
  add(data: Object): void {
    console.log('adds to local storage...');
  }

  edit(id: number, data: Object): void {
    console.log('edits a record from local storage');
  }

  delete(data: Object): void {
    console.log('deletes a record from local storage');
  }
}