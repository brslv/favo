import { Injectable } from '@angular/core';
import { StorageAdapterContract } from '../../contracts/storage-adapter.contract';
import { j, unj } from '../../utils/json.util';
import { BookmarkModel } from '../../bookmarks/bookmark.model';

@Injectable()
export class LocalStorageAdapterService implements StorageAdapterContract {
  private UNIQUE_ID_SIGNIFIER = '_id';

  get(key: string, id?: number): Promise<any> {
    const promise = new Promise((resolve, reject) => {
      if (!id) {
        resolve(unj(localStorage.getItem(key)));
        return;
      }

      resolve(unj(localStorage.getItem(key))[this.UNIQUE_ID_SIGNIFIER]);
    });

    return promise;
  }

  add(data: any, key: string): Promise<any> {
    return new Promise((resolve, reject) => {
      if (!this.keyExists(key)) {
        this.injectNewId(data, key)
          .then(data => {
            localStorage.setItem(key, j([data]));
            resolve(BookmarkModel.factory(data));
          });
      } else {
        this.get(key)
          .then(existing => {
            const newItem = this.injectNewId(data, key)
              .then(data => {
                existing.push(newItem);
                localStorage.setItem(key, j(existing));
                resolve(BookmarkModel.factory(data));
              });
          });
      }
    });
  }

  edit(id: number, data: any, key: string): Promise<any> {
    return Promise.resolve('edits a record from local storage');
  }

  delete(data: any, key: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.get(key).then((bookmarks: BookmarkModel[]) => {
        if (bookmarks) {
          bookmarks = bookmarks.filter(b => {
            return b[this.UNIQUE_ID_SIGNIFIER] !== data.id;
          });
        }

        localStorage.setItem(key, j(bookmarks));

        resolve(bookmarks);
      });
    });
  }

  private keyExists(key: string) {
    return localStorage.getItem(key);
  }

  private injectNewId(data: Object, key: string): Promise<any> {
    return new Promise((resolve, reject) => {
      if (!(data instanceof Object)) {
        data = {
          '_': data // use a default key '_'
        }
      }

      this.generateId(key).then(id => {
        data[this.UNIQUE_ID_SIGNIFIER] = id

        resolve(data);
      });
    });
  }

  private generateId(key: string): Promise<any> {
    return new Promise((resolve, reject) => {
      if (!this.keyExists(key)) {
        resolve(1);
        return;
      }

      this.get(key).then((existing: any[]) => {
        const biggestId: number = this.getBiggestId(existing);
        resolve(biggestId + 1);
      });
    });
  }

  private getBiggestId(existing: any[]): number {
    let biggestId: number = 1;

    existing.forEach(item => {
      if (item[this.UNIQUE_ID_SIGNIFIER] > biggestId) {
        biggestId = +item[this.UNIQUE_ID_SIGNIFIER];
      }
    });

    return biggestId;
  }
}
