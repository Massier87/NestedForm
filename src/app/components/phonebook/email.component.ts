import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'email',
  templateUrl: 'email.component.html',
})
export class EmailComponent {
  @Input('group')
  public emailForm: FormGroup;
}
