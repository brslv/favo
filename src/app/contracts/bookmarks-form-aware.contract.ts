import { NgForm } from '@angular/forms';

export interface BookmarksFormAwareContract {
  onFormSubmit(form: NgForm): void;
}
