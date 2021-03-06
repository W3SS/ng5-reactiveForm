import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn, FormArray } from '@angular/forms';
import 'rxjs/add/operator/debounceTime';


// here function start
function emailMatcher(c: AbstractControl): { [key: string]: boolean } | null {
  let emailControl = c.get('email');
  let confirmControl = c.get('confirmEmail');
  if (emailControl.pristine || confirmControl.pristine) {
    return null;
  }
  if (emailControl.value === confirmControl.value) {
    return null;
  }
  return { 'match': true };
}

function ratingRange(min: number, max: number): ValidatorFn {
  return (c: AbstractControl): { [key: string]: boolean } | null => {
    if (c.value !== undefined && (isNaN(c.value) || c.value < min || c.value > max)) {
      return { 'range': true };
    };
    return null;
  };
}

// here function end

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})
export class SignUpFormComponent implements OnInit {

  pageTitle: string = 'Sign Up Form';
  customerForm: FormGroup;
  emailMessage: string;
  private validationMessages = {
    required: 'Please enter your email address.',
    pattern:  'Please enter a valid email address.',
    minlength: 'Please enter at least 4 characters.'
  };


  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.customerForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.maxLength(50)]],
      emailGroup: this.fb.group({
        email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+'),
        Validators.minLength(4)]],
        confirmEmail: ['', Validators.required],
      }, { validator: emailMatcher }),
      phone: '',
      sendOtp: 'email',
      rating: ['', ratingRange(1, 5)],
      sendCatalog: [true]

    })

    // sendOtp  
    this.customerForm.get('sendOtp').valueChanges
      .subscribe(value => {
        this.setNotification(value)
      });

    // email id message get here 
    const emailControl = this.customerForm.get('emailGroup.email');
    emailControl.valueChanges.debounceTime(1000).subscribe(value => {
      console.log(value);
      this.setMessage(emailControl)
    });
  }

  // set Message
  setMessage(c: AbstractControl): void {
    this.emailMessage = '';
    if ((c.touched || c.dirty) && c.errors) {
      this.emailMessage = Object.keys(c.errors).map(key =>
        this.validationMessages[key]).join(' ');
    }
    console.log('c' + c);
    console.log('c.touched - ' + c.touched);
    console.log('c.dirty - ' + c.dirty);
    console.log('c.errors - ' + c.errors);
    console.log(c.errors);
    console.log(c);
  }

  // sendOtp code here
  setNotification(notifyVia: string): void {
    const phoneControl = this.customerForm.get('phone');
    if (notifyVia === 'text') {
      phoneControl.setValidators(Validators.required);
    } else {
      phoneControl.clearValidators();
    }
    phoneControl.updateValueAndValidity();
  }

  save(): void {
    console.log(this.customerForm);
    console.log('Saved: ' + JSON.stringify(this.customerForm.value));
  }

}
