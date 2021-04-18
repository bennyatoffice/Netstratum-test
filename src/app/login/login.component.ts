import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  myForm: FormGroup;

  regexp = new RegExp(
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.myForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(this.regexp)]],
      password: ['', [Validators.required]],
    });
  }

  submit() {
    console.log(this.myForm.value);

    var result = this.authService.logMeIn(this.myForm.value);
    console.log(result);

    if (result.status) {
      if (result.type == 1) {
        console.log('admin');

        this.router.navigate(['/adminHome']);
      } else {
        this.router.navigate(['/guest']);
      }
    }
  }
}
