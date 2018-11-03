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
import { MatInputModule } from '@angular/material/input';
import { ShelterService } from './services/shelter.service';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';

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
    MatButtonModule,
    MatInputModule,
    MatTabsModule,
    MatToolbarModule,
    MatIconModule
  ],
  providers: [PetService,
     ShelterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
