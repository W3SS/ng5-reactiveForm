import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})
export class SignUpFormComponent implements OnInit {

  pageTitle:string = 'Sign Up Form';
  customerForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.customerForm = new FormGroup({
      firstName: new FormControl()
    })
  }

  save(): void {
      console.log(this.customerForm);
      console.log('Saved: ' + JSON.stringify(this.customerForm.value));
  }

}
