import { Injectable, Inject } from '@angular/core';

export interface AuthUserData {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  userData: boolean;

  get isAuthorized() {
    return true;
  }

  constructor() { }

  login(data: AuthUserData) {
    if (data.email === 'admin@mail.com' && data.password === 'qwer1234') {
      this.userData = true;
    } else {
      this.userData = false;
    }
  }

  logOut() {
    this.userData = false;
  }
}
