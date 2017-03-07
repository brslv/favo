import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BookmarksFormAwareContract } from '../contracts/bookmarks-form-aware.contract';

@Component({
  moduleId: module.id,
  selector: 'fv-bookmark-add-form',
  templateUrl: './bookmarks-form.html'
})
export class BookmarkAddFormComponent implements BookmarksFormAwareContract {
  public bookmark: Object;
  public title: string;

  constructor() {
    this.bookmark = {};
    this.title = "Add new bookmark";
  }

  onFormSubmit(form: NgForm): void {
    this.addBookmark(form);
  }

  addBookmark(form: NgForm) {
    console.log('adding new bookmark');
    console.log(form); // @TODO: should I pass the entire form in here?
  }
}
