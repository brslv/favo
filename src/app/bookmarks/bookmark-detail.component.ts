import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { BookmarkModel } from './bookmark.model';
import { BookmarksService } from './bookmarks.service';
import { BookmarksFormAwareContract } from '../contracts/bookmarks-form-aware.contract';
import { NgForm } from '@angular/forms';

import 'rxjs/add/operator/switchMap';

@Component({
  moduleId: module.id,
  selector: 'fv-bookmark-detail',
  templateUrl: './bookmarks-form.html',
})
export class BookmarkDetailComponent implements OnInit, BookmarksFormAwareContract {
  @Input()
  public bookmark: BookmarkModel;
  public title: string;

  constructor(
    private route: ActivatedRoute,
    private bookmarksService: BookmarksService) {
    }

  public ngOnInit(): void {
    this.route.params
    .switchMap((params: Params) => {
      return this.bookmarksService.get({
        engine: 'and',
        id: +params['id']
      })
    })
    .subscribe(bookmark => {
      this.bookmark = bookmark
      this.title = `Edit bookmark: ${this.bookmark.title}`;
    });
  }

  public onFormSubmit(form: NgForm): void {
    this.update();
  }

  public update(): void {
    console.log('updating bookmark...');
  }
}
