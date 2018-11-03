import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, NgForm, Validators } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  authForm: FormGroup;
  email = '';
  password = '';

  constructor() {}

  ngOnInit() {
    this.authForm = new FormGroup({
      email: new FormControl(this.email, [
        Validators.required
      ]),
      password: new FormControl(this.email, [
        Validators.required
      ]),
    });
  }

  authorize(formData) {
    console.log("form data: ", formData.value);
  }
}
