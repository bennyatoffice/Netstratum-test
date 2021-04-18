import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  login = [
    {
      email: 'admin@gmail.com', // username should be email
      password: 'admin123', // password should contain alphabet and numbers and should contain minimum 6 characters
    },
    {
      email: 'guest@gmail.com', // username should be email
      password: 'guest123', // password should contain alphabet and numbers and should contain minimum 6 characters
    },
  ];

  logMeIn(data) {
    var result = this.login.find(
      (Credential) =>
        data['email'] == Credential['email'] &&
        data['password'] == Credential['password']
    );
    if (result) {
      if (data['email'] == 'admin@gmail.com') {
        return { status: true, type: 1 };
      } else {
        return { status: true, type: 0 };
      }
    } else {
      return { status: false, message: 'Check Email and Password' };
    }
  }

  constructor() {}
}
