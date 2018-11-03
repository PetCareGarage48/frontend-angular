
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ShelterService } from './services/shelter.service';
import { PetService } from './services/pet.service';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { PetsListComponent } from './components/pets-list/pets-list.component';
import { ShelterComponent } from './components/shelter/shelter.component';
import { PetComponent } from './components/pet/pet.component';

@NgModule({
  declarations: [
    AppComponent,
    ShelterComponent,
    PetComponent,
    PetsListComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [
    PetService,
     ShelterService
    ],
  bootstrap: [AppComponent]
})
export class AppModule {}
