import { Injectable, Inject } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { catchError, delay, tap } from "rxjs/operators";

import { environment } from "../environments/environment";

export interface AuthUserData {
  email: string;
  password: string;
}

@Injectable({
  providedIn: "root"
})
export class AuthorizationService {
  private loginUrl = `${environment.apiUrl}/users/login`;
  private registerUrl = `${environment.apiUrl}/users/register`;

  private isAuthorized = false;

  get isUserAuthorized() {
    return this.isAuthorized;
  }

  constructor(private httpClient: HttpClient) {}

  register(form) {
    if (form.invalid) {
      return;
    }
    const userData = {
      firstName: form.value.firstName,
      lastName: form.value.lastName,
      email: form.value.email,
      password: form.value.password
    };
    let params = new HttpParams();
    params = params.append('isAdmin', 'true'); // TODO: for this time we register only admins

    const httpOptions = {
      params: params,
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.httpClient
      .post<any>(this.registerUrl, JSON.stringify(userData), httpOptions)
      .pipe(
        tap(response => {
          this.isAuthorized = true;
          localStorage.setItem('access_token', response.data.token);
          return response;
        }),
        catchError(err => {
          this.isAuthorized = false;
          console.error("Auth failed ", err);
          return err;
        })
      );
  }

  login(form) {
    if (form.invalid) {
      return;
    }
    const userData = {
      email: form.value.email,
      password: form.value.password
    };

    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };

    return this.httpClient
      .post<any>(this.loginUrl, userData, httpOptions)
      .pipe(
        tap(response => {
          this.isAuthorized = true;
          localStorage.setItem('access_token', response.data.token);
          return response;
        }),
        catchError(err => {
          this.isAuthorized = false;
          console.error("Auth failed ", err);
          return err;
        })
      );
  }

  logOut() {
    this.isAuthorized = false;
    localStorage.removeItem('access_token');
  }
}
