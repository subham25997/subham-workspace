import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent implements OnInit {

  profileForm!: FormGroup;
  saveSuccess = false;
  timeout: any;

  get formControls(): { [key: string]: AbstractControl } {
    return this.profileForm.controls;
  }

  ngOnInit() {
    const userInfo = localStorage.getItem("user-details");
    const userDetails: any = userInfo ? JSON.parse(userInfo) : null;
    this.profileForm = new FormGroup({
      userName: new FormControl(userDetails ? userDetails.userName : "", Validators.required),
      email: new FormControl(userDetails ? userDetails.email : "", Validators.compose([Validators.required, Validators.email])),
      phoneNo: new FormControl(userDetails ? userDetails.phoneNo : "", Validators.compose([Validators.required, Validators.maxLength(10), Validators.minLength(10)])),
      address: new FormControl(userDetails ? userDetails.address : "", Validators.required),
    });
    
  }

  saveUserDetails() {
    if(this.profileForm.valid) {
      clearTimeout(this.timeout);
      localStorage.setItem("user-details", JSON.stringify(this.profileForm.value));
      this.saveSuccess = true;
      this.timeout = setTimeout(() => this.saveSuccess = false, 5000);
    }
  }
}
