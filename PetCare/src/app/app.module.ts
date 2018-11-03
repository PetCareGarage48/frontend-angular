import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from "./app-routing.module";
import { MaterialModule } from "./material.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { ShelterService } from "./services/shelter.service";
import { PetService } from "./services/pet.service";
import { PetsListComponent } from "./components/pets-list/pets-list.component";
import { ShelterComponent } from "./components/shelter/shelter.component";
import { PetComponent } from "./components/pet/pet.component";
import { PetFormComponent } from "./components/pet-form/pet-form.component";
import { RegisterComponent } from "./register/register.component";

@NgModule({
  declarations: [
    AppComponent,
    ShelterComponent,
    PetComponent,
    PetsListComponent,
    HomeComponent,
    LoginComponent,
    PetFormComponent,
    RegisterComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [PetFormComponent],
  providers: [PetService, ShelterService],
  bootstrap: [AppComponent]
})
export class AppModule {}
