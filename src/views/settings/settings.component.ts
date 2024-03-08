import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent {
  // userName: any;
  // email: any;
  // phoneNo: any;
  // address: any;

  saveUserDetails() {
    const userForm = new FormGroup({
      userName: new FormControl("", Validators.required),
      email: new FormControl("", Validators.compose([Validators.required, Validators.email])),
      phoneNo: new FormControl("", Validators.compose([Validators.required, Validators.maxLength(10), Validators.minLength(10)])),
      address: new FormControl("", Validators.required),
    });

    console.log(userForm);
  }
}
