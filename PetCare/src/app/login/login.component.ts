import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, NgForm, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { AuthorizationService } from "../../services/authorization.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  authForm: FormGroup;
  email = "";
  password = "";

  constructor(
    private router: Router,
    private authorizationService: AuthorizationService
  ) {}

  ngOnInit() {
    this.authForm = new FormGroup({
      email: new FormControl(this.email, [Validators.required]),
      password: new FormControl(this.email, [Validators.required])
    });
  }

  authorize(formData) {
    console.log("form data: ", formData.value);
    this.authorizationService
      .login(formData)
      .subscribe(this.onLoginSucess, this.onError);
  }

  register() {
    this.router.navigate(["register"]);
  }

  onLoginSucess(data) {
    console.log('login sucess!', data);
    this.router.navigate(["home"]);
  }

  onError(error) {}
}
