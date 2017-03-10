import { Injectable, Inject } from '@angular/core';
import { BookmarkModel } from './bookmark.model';
import { WhereCriteriaContract } from '../contracts/where-criteria.contract';
import { StorageAdapterContract } from '../contracts/storage-adapter.contract';
import storageKeys from '../storage/storage-keys';

@Injectable()
export class BookmarksService {
  bookmarks: BookmarkModel[] = [];

  constructor(
    @Inject('StorageAdapter') private storageAdapter: StorageAdapterContract) {
      this.init();
  }

  init(): void {
    this.storageAdapter.get(storageKeys.BOOKMARKS).then(bookmarks => {
      if (bookmarks) {
        bookmarks.forEach((item: BookmarkModel) => {
          this.bookmarks.push(BookmarkModel.factory(item));
        });
      }
    });
  }

  add(bookmark: BookmarkModel): void {
    this.storageAdapter
      .add(bookmark, storageKeys.BOOKMARKS)
      .then((bookmark: BookmarkModel) => {
        this.bookmarks.push( bookmark );
      })
  }

  getAll() {
    return this.bookmarks;
  }

  get(where: WhereCriteriaContract): Array<BookmarkModel> {
    const matchedBookmarks: BookmarkModel[] = [];
    const engine: string = where.engine;
    delete where.engine;

    return this.bookmarks.filter((currentBookmark) => {
      let matches = {};

      for (let clause in where) {
        let clauseValue = where[clause];
        matches[clause] = false;

        if (clauseValue instanceof Array) {
          // clause is array
          if (clauseValue.indexOf(currentBookmark[clause]) !== -1) {
            matches[clause] = true;
          }
        } else {
          // clause is a value
          matches[clause] = currentBookmark[clause] === clauseValue;
        }
      }

      let fullfillsTheCondition: boolean;
      if (engine === 'and') {
        let everythingMatches = true;
        for (let match in matches) {
          if (!matches[match]) {
            everythingMatches = false;
          }
        }
        fullfillsTheCondition = everythingMatches;
      } else if (engine === 'or') {
        let atLeastOneMatches = false;
        for (let match in matches) {
          if (matches[match]) {
            atLeastOneMatches = true;
          }
        }
        fullfillsTheCondition = atLeastOneMatches;
      }

      return fullfillsTheCondition;
    });
  }

  remove(bookmark: BookmarkModel): void {
    this.storageAdapter.delete({id: bookmark.id}, storageKeys.BOOKMARKS);
    this.bookmarks = this.bookmarks.filter(b => {
      return b.id !== bookmark.id;
    });
  }
}
