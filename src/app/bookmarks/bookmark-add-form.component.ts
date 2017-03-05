import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  moduleId: module.id,
  selector: 'fv-bookmark-add-form',
  templateUrl: './bookmark-add-form.component.html'
})
export class BookmarkAddFormComponent {
  addBookmark(form: NgForm) {
    console.log('adding new bookmark');
    console.log(form); // @TODO: should I pass the entire form in here?
  }
}