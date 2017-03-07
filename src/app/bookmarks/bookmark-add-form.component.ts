import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  moduleId: module.id,
  selector: 'fv-bookmark-add-form',
  templateUrl: './bookmarks-form.html'
})
export class BookmarkAddFormComponent {
  public bookmark: Object;
  public title: string;

  constructor() {
    this.bookmark = {};
    this.title = "Add new bookmark";
  }

  onFormSubmit(form: NgForm) {
    this.addBookmark(form);
  }

  addBookmark(form: NgForm) {
    console.log('adding new bookmark');
    console.log(form); // @TODO: should I pass the entire form in here?
  }
}
