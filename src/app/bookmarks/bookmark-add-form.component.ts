import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BookmarksFormAwareContract } from '../contracts/bookmarks-form-aware.contract';
import { StorageService } from '../storage/storage.service';

@Component({
  moduleId: module.id,
  selector: 'fv-bookmark-add-form',
  templateUrl: './bookmarks-form.html',
  providers: [ StorageService ]
})
export class BookmarkAddFormComponent implements BookmarksFormAwareContract {
  public bookmark: Object;
  public title: string;

  constructor(public storageService: StorageService) {
    this.bookmark = {};
    this.title = "Add new bookmark";
  }

  onFormSubmit(form: NgForm): void {
    this.addBookmark(form);
  }

  addBookmark(form: NgForm) {
    this.storageService.add({});
  }
}
