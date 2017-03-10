import { Component, Input } from '@angular/core';
import { AlertModel } from './alert.model';

@Component({
  moduleId: module.id,
  selector: 'fv-alert',
  templateUrl: './alert.component.html'
})
export class AlertComponent {
  @Input() public alert: AlertModel;

  public hide() {
    this.alert = null;
  }
}
