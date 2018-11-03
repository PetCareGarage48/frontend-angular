import { Injectable, Inject } from '@angular/core';

export interface AuthUserData {
  email: string;
  password: string;
}

const mockUser = {
  email: 'admin@mail.com',
  password: 'qwer1234'
};

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  isAuthorized = false;

  get isUserAuthorized() {
    return this.isAuthorized;
  }

  constructor() { }

  login(form) {
    if (form.invalid) {
      return;
    }
    // TODO: remove mock data;
    if (form.value.email === mockUser.email && form.value.password === mockUser.password) {
      this.isAuthorized = true;
    } else {
      this.isAuthorized = false;
    }
  }

  logOut() {
    this.isAuthorized = false;
  }
}
