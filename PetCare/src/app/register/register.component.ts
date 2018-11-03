import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, NgForm, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { AuthorizationService } from "../../services/authorization.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"]
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  formData = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordRepeat: ""
  };

  constructor(
    private router: Router,
    private authorizationService: AuthorizationService
  ) {}

  ngOnInit() {
    this.registerForm = new FormGroup({
      firstName: new FormControl(this.formData.firstName, [Validators.required]),
      lastName: new FormControl(this.formData.lastName),
      email: new FormControl(this.formData.email, [Validators.required, Validators.email]),
      password: new FormControl(this.formData.password, [Validators.required]),
      passwordRepeat: new FormControl(this.formData.passwordRepeat, [Validators.required]),
    });
  }

  register(formData) {
    if (formData.invalid) {
      return;
    }
    if (formData.value.password !== formData.value.passwordRepeat) {
      alert('password doesn\'t match!');
      return;
    }
    console.log("form data: ", formData.value);
    this.authorizationService
      .register(formData)
      .subscribe(this.onSucess);
  }

  onSucess = response => {
    console.log('register sucess!', response);
    localStorage.setItem('access_token', JSON.stringify(response.data));
    this.router.navigate(["home"]);
  }
}
