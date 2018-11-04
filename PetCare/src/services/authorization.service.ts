import { Injectable, Inject } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of, Subject, throwError } from "rxjs";
import { map } from "rxjs/internal/operators/map";
import { catchError, delay, tap } from "rxjs/operators";

import { environment } from "../environments/environment";

export interface AuthUserData {
  email: string;
  password: string;
}

export interface AuthorizationResult {
  data: AuthUserData;
  error: boolean;
  message: string;
  status: number;
}

@Injectable({
  providedIn: "root"
})
export class AuthorizationService {
  private loginUrl = `${environment.apiUrl}/shelter/admins/login`;
  private registerUrl = `${environment.apiUrl}/shelter/admins/register`;

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
      email: form.value.email,
      password: form.value.password
    };
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.httpClient
      .post<AuthorizationResult>(this.registerUrl, JSON.stringify(userData), httpOptions)
      .pipe(
        tap(data => {
          this.isAuthorized = true;
          console.log("response", data);
          localStorage.setItem('access_token', JSON.stringify(data));
          return data;
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
      .post<AuthorizationResult>(this.loginUrl, userData, httpOptions)
      .pipe(
        tap(data => {
          this.isAuthorized = true;
          console.log("response", data);
          localStorage.setItem('access_token', JSON.stringify(data));
          return data;
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
