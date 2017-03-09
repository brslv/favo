import { Injectable } from '@angular/core';
import { StorageAdapterContract } from '../../contracts/storage-adapter.contract';
import { j, unj } from '../../utils/json.util';
import { BookmarkModel } from '../../bookmarks/bookmark.model';

@Injectable()
export class LocalStorageAdapterService implements StorageAdapterContract {
  private UNIQUE_ID_SIGNIFIER = '_id';
  
  get(key: string, id?: number) {
    if (!id) {
      return unj(localStorage.getItem(key));
    }

    return unj(localStorage.getItem(key))[this.UNIQUE_ID_SIGNIFIER];
  }
  
  add(data: any, key: string): Object {
    if (!this.keyExists(key)) {
      data = this.injectNewId(data, key);
      localStorage.setItem(key, j([data]));
      return BookmarkModel.factory(data);
    } else {
      const existing: [any] = this.get(key);
      const newItem = this.injectNewId(data, key);
      existing.push(newItem);
      localStorage.setItem(key, j(existing));
      return BookmarkModel.factory(data);
    }
  }

  edit(id: number, data: any, key: string): void {
    console.log('edits a record from local storage');
  }

  delete(data: any, key: string): void {
    console.log('deletes a record from local storage');
  }

  private keyExists(key: string) {
    return localStorage.getItem(key);
  }

  private injectNewId(data: Object, key: string): Object {
    if (!(data instanceof Object)) {
      data = {
        '_': data // use a default key '_'
      }
    }

    data[this.UNIQUE_ID_SIGNIFIER] = this.generateId(key);
    
    return data;
  }

  private generateId(key: string): number {
    if (!this.keyExists(key)) {
      return 1;
    }

    const existing: [any] = this.get(key);
    const biggestId: number = this.getBiggestId(existing);

    return biggestId + 1;
  }

  private getBiggestId(existing: [any]): number {
    let biggestId: number = 1;

    existing.forEach(item => {
      if (item[this.UNIQUE_ID_SIGNIFIER] > biggestId) {
        biggestId = +item[this.UNIQUE_ID_SIGNIFIER];
      }
    });

    return biggestId;
  }
}