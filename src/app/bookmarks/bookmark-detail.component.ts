import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { BookmarkModel } from './bookmark.model';
import { BookmarksService } from './bookmarks.service';

import 'rxjs/add/operator/switchMap';

@Component({
  moduleId: module.id,
  selector: 'bookmark-detail',
  templateUrl: './bookmark-detail.component.html',
})
export class BookmarkDetailComponent implements OnInit {
  @Input()
  public bookmark: BookmarkModel;

  constructor(
    private route: ActivatedRoute,
    private bookmarksService: BookmarksService) { }

  public ngOnInit(): void {
    this.route.params
    .switchMap((params: Params) => {
      return this.bookmarksService.get({
        engine: 'and',
        id: +params['id']
      })
    })
    .subscribe(bookmark => this.bookmark = bookmark);
  }

  public update(): void {
    console.log('updating bookmark...');
  }
}
