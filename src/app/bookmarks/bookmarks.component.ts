import { Component } from '@angular/core';
import { BookmarkModel } from './bookmark.model';
import { BookmarksService } from './bookmarks.service';

@Component({
  moduleId: module.id,
  selector: 'fv-bookmarks',
  templateUrl: './bookmarks.component.html'
})
export class BookmarksComponent {
  bookmarks: BookmarkModel[] = [];

  constructor(public bookmarksService: BookmarksService) {
    this.bookmarks = bookmarksService.getAll();

    let result = this.bookmarksService.get({
      engine: 'and', // the condition on object (whereClause) level
      id: [1,2],
      weight: [10,20], // on the array level the condition is OR
    });

    console.log(result);
  }
}