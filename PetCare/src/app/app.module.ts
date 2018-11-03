import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShelterComponent } from './components/shelter/shelter.component';
import { MatCardModule } from '@angular/material/card';
import { PetComponent } from './components/pet/pet.component';
import { PetsListComponent } from './components/pets-list/pets-list.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PetService } from './services/pet.service';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';

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
    MatCardModule,
    MatGridListModule,
    MatButtonModule
  ],
  providers: [PetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
