import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup, AbstractControl } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  loginForm: AbstractControl;
  errorMessage: string;
  constructor(private router: Router) {
  }

  ngOnInit() {
    this._formGroup();
  }
  _formGroup() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.compose([Validators.required, Validators.email])]),
      password: new FormControl('', [Validators.compose([Validators.required])])
    })
  }
  onSubmit() {
    if (!this.loginForm.valid) {
      return;
    }
    if (this.loginForm.value.email === 'test@gmail.com' &&
      this.loginForm.value.password === '1234') {
      this.errorMessage = '';
      this.router.navigate(['/layout']);
    } else {
      this.errorMessage = 'Invalid Email/Password';
    }
  }


}
