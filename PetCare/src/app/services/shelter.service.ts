import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

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

    getShelters() {
        return this.http.get<Shelter[]>(this.serverLink + '/v1/shelters');
    }

    addShelter(item: Shelter) {
        return this.http.post<Shelter>(this.serverLink + '/v1/shelter/register', item);
    }
}
