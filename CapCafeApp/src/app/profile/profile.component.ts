import { Component, OnInit, Input } from '@angular/core';
import { User } from '../models/user';
import { FormGroup, FormControl } from '@angular/forms';

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

  saveUpdates() {
    console.log("Details Submitted");
  }

  private editMode: boolean = false;
  private formError: boolean = false;
  private formErrorString: string = "";

  form: FormGroup = null;
  
  @Input()
  private user: User = new User();

  ngOnInit(): void {
    this.user.employeeId = "dummy Id";
    this.user.name = "dummy name";
    this.user.emailId = "dummy@email.com";
    this.user.phoneNumber = "1234567890";
    this.user.dateOfBirth = "dd/mm/yyyy";
    this.form = new FormGroup({
      employeeId: new FormControl({value: this.user.employeeId, disabled:true}),
      emailId: new FormControl({value: this.user.emailId, disabled:true}),
      password: new FormControl({value: this.user.password, disabled:true}),
      name: new FormControl({value: this.user.name, disabled:true}),
      phoneNumber: new FormControl({value: this.user.phoneNumber, disabled:true}),
      dateOfBirth: new FormControl({value: this.user.dateOfBirth, disabled:true}),
      userRole: new FormControl('')
    });
  }

  constructor() {

  }
}
