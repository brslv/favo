import { Component } from '@angular/core';
import { BookmarkModel } from './bookmark.model';
import { BookmarksService } from './bookmarks.service';

@Component({
  moduleId: module.id,
  selector: 'fv-bookmarks',
  templateUrl: './bookmarks.component.html',
})
export class BookmarksComponent {
  bookmarks: BookmarkModel[] = [];
  selectedBookmark: BookmarkModel;

  constructor(public bookmarksService: BookmarksService) {
    this.bookmarks = bookmarksService.getAll();
  }

  showDetails(bookmark: BookmarkModel): void {
    this.selectedBookmark = bookmark;
  }
}