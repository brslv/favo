import { Component } from '@angular/core';
import { BookmarkModel } from './bookmark.model';

@Component({
  moduleId: module.id,
  selector: 'fv-bookmarks',
  templateUrl: './bookmarks.component.html'
})
export class BookmarksComponent {
  bookmarks: BookmarkModel[] = [
    new BookmarkModel(1, 'Google', 'http://google.com', 'The most advanced search engine out there...', 10),
    new BookmarkModel(1, 'Yahoo', 'http://yahoo.com', 'A pretty decent search engine', 20),
    new BookmarkModel(1, 'Bing', 'http://bing.com', 'Meeeh...', 30),
  ];

  constructor() {}
}