import { Component, Input } from '@angular/core';
import { ModalModel } from './modal.model';

@Component({
  moduleId: module.id,
  selector: 'fv-modal',
  templateUrl: './modal.component.html'
})
export class ModalComponent {
  @Input() public modal: ModalModel;
}
