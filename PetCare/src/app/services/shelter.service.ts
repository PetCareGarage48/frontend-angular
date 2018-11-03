import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { of, Observable } from 'rxjs';

export interface Shelter {
  name: string;
  email: string;
  address: string;
  description: string;
  location: Location;
  working_hours: [];
  photo: string;
}

export interface Location {
 longitude: number;
 latitude: number;
}

@Injectable()
export class ShelterService {
  private serverLink = environment.API_URL;

  constructor(private http: HttpClient) { }

    getShelter(shelterId): Observable<Shelter> {
      const sheltr = {
        name: 'Charity',
        email: 'charity@gmail.com',
        address: 'Lviv',
        description: 'Small shelter',
        photo: 'https://nodogaboutit.files.wordpress.com/2010/07/picture-198.png'
      };

        return of(sheltr as Shelter);
        // this.http.get<Shelter>(this.serverLink + '/v1/shelters/shelter?shelterId='+shelterId);
    }

    addShelter(item: Shelter) {
        return this.http.post<Shelter>(this.serverLink + '/v1/shelter/register', item);
    }

    updateShelter(item: Shelter) {
        return this.http.put<Shelter>(this.serverLink + '/v1/shelter', item);
    }
}
