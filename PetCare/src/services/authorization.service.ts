import { Injectable, Inject } from '@angular/core';

export interface AuthUserData {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  isAuthorized: boolean;

  get isUserAuthorized() {
    return this.isAuthorized;
  }

  constructor() { }

  login(data: AuthUserData) {
    if (data.email === 'admin@mail.com' && data.password === 'qwer1234') {
      this.isAuthorized = true;
    } else {
      this.isAuthorized = false;
    }
  }

  logOut() {
    this.isAuthorized = false;
  }
}
