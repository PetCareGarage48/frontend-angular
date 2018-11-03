import { Component, NgModule, OnInit } from "@angular/core";
import { ActivatedRoute, Router, RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from "../services/auth-guard.service";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  {
    path: "home",
    pathMatch: "full",
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  { path: "login", pathMatch: "full", component: LoginComponent },
  { path: "register", pathMatch: "full", component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule {}
