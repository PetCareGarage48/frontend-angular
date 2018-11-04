import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { flatMap, mapTo } from 'rxjs/operators';

export interface Shelter {
  id: string;
  title: string;
  email: string;
  description: string;
  location: Location;
  working_hours: [];
  photos: [];
}

export interface Location {
 longitude: number;
 latitude: number;
}

@Injectable()
export class ShelterService {
  private serverLink = environment.apiUrl;

  constructor(private http: HttpClient) { }

    getShelter(): any {
      // const sheltr = {
      //   name: 'Charity',
      //   email: 'charity@gmail.com',
      //   address: 'Lviv',
      //   description: 'Small shelter',
      //   photo: 'https://nodogaboutit.files.wordpress.com/2010/07/picture-198.png'
      // };

       // return of(sheltr as Shelter);
       return this.http.get<Shelter>(this.serverLink + '/shelters/shelter/admin', {headers: this.getAuthHeader()});
    }

    addShelter(item: Shelter) {
        return this.http.post<Shelter>(this.serverLink + '/shelters/shelter', item,  {headers: this.getAuthHeader()});
    }

    updateShelter(item: Shelter) {
        return this.http.put<Shelter>(this.serverLink + '/shelters/shelter', item,  {headers: this.getAuthHeader()});
    }

    private getTokenFromLocalStorage(): string {
      return localStorage.getItem('access_token');
    }

    private getAuthHeader() {
      return new HttpHeaders({
          Authorization: `${this.getTokenFromLocalStorage()}`
      });
    }
}
