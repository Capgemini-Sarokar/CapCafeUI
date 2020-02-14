import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/user.model';
import { FormGroup, FormControl } from '@angular/forms';
import { CafeUserService } from 'src/app/Services/cafe-user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  enableEditMode() {
    console.log("in edit Mode")
    this.editMode = true;
    //this.form.get('employeeId').enable();
    this.form.get('emailId').enable();
    this.form.get('name').enable();
    this.form.get('phoneNumber').enable();
    //this.form.get('dateOfBirth').enable();
  }

  async saveUpdates() {
    this.form.get('employeeId').enable();
    this.form.get('dateOfBirth').enable();
    this.form.get('password').enable();
    this.form.get('userRole').enable();
    console.log("Details Submitted");
    let x = await this.submitForm().catch(error => {
      this.formErrorString = "We were not able to update your details, please try again later";
      console.log(this.formErrorString);
      this.formError = true;
    });
    if (!this.formError) {
      this.user = x;
      this.editMode = false;
      this.userService.saveUser(this.user);
      this.form.get('emailId').disable();
      this.form.get('name').disable();
      this.form.get('phoneNumber').disable();
      this.form.get('employeeId').disable();
      this.form.get('dateOfBirth').disable();
      this.form.get('password').disable();
      this.form.get('userRole').disable();
    }
  }

  submitForm(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.userService.updateUserDetails(this.form.value).subscribe(
        item => {
          // item will be an instance of User model
          console.log(item);
          resolve(item);
        },
        error => {
          // error will be an instance of HttpErrorResponse
          console.log(error);
          reject(error);
        }
      );
    });
  }

  private editMode: boolean = false;
  private formError: boolean = false;
  private formErrorString: string = "";

  form: FormGroup = null;

  private user: User = null;

  ngOnInit(): void {
    this.user = this.userService.profile();
    this.form = new FormGroup({
      employeeId: new FormControl({ value: this.user.employeeId, disabled: true }),
      emailId: new FormControl({ value: this.user.emailId, disabled: true }),
      password: new FormControl({ value: this.user.password, disabled: true }),
      name: new FormControl({ value: this.user.name, disabled: true }),
      phoneNumber: new FormControl({ value: this.user.phoneNumber, disabled: true }),
      dateOfBirth: new FormControl({ value: this.user.dateOfBirth, disabled: true }),
      userRole: new FormControl({ value: this.user.userRole, disabled: true })
    });
  }

  constructor(private userService: CafeUserService) {

  }
}
