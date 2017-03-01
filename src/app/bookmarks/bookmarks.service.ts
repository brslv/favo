import { Injectable } from '@angular/core';
import { BookmarkModel } from './bookmark.model';
import { WhereClauseContract } from '../contracts/where-clause.contract';

@Injectable()
export class BookmarksService {
  bookmarks: BookmarkModel[] = [
    new BookmarkModel(1, 'Google', 'http://google.com', 'The most advanced search engine out there...', 10),
    new BookmarkModel(2, 'Yahoo', 'http://yahoo.com', 'A pretty decent search engine', 20),
    new BookmarkModel(3, 'Bing', 'http://bing.com', 'Meeeh...', 30),
  ]
  
  getAll() {
    return this.bookmarks;
  }

  get(where: WhereClauseContract): Array<BookmarkModel> {
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
      
      console.log(matches);
      
      let fullfillsTheCondition;
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
}