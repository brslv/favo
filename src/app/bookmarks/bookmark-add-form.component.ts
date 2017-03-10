import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BookmarksFormAwareContract } from '../contracts/bookmarks-form-aware.contract';
import { StorageService } from '../storage/storage.service';
import { BookmarksService } from '../bookmarks/bookmarks.service';
import { BookmarkModel } from '../bookmarks/bookmark.model';
import { AlertModel } from '../messages/alert.model';
import storageKeys from '../storage/storage-keys';
declare var $:any;

@Component({
  moduleId: module.id,
  selector: 'fv-bookmark-add-form',
  templateUrl: './bookmarks-form.html',
  providers: [ StorageService ]
})
export class BookmarkAddFormComponent implements BookmarksFormAwareContract {
  public bookmark: Object;
  public title: string;
  public alert: AlertModel;

  constructor(private bookmarksService: BookmarksService) {
    this.bookmark = {};
    this.title = "Add new bookmark";
  }

  onFormSubmit(form: NgForm): void {
    this.addBookmark(form);
    form.reset();
    this.displayMessage();
  }

  displayMessage() {
    this.alert = new AlertModel('OK, we saved it...', AlertModel.TYPE_SUCCESS);
  }

  addBookmark(form: NgForm) {
    this.bookmarksService.add(BookmarkModel.factory(this.bookmark));
  }
}
