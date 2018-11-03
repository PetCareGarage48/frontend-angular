import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { pets } from '../../mocks/pets.js';
import { of } from 'rxjs';


export interface Pet {
  name: string;
  age: string;
  description: string;
  breed: string;
  photo: string;
}

@Injectable()
export class PetService {
  private serverLink = environment.API_URL;

  constructor(private http: HttpClient) { }

    getPets() {
        return of(pets);
        // this.http.get<Pet[]>(this.serverLink + '/v1/pets');
    }

    addPet(item: Pet) {
        return this.http.post<Pet>(this.serverLink + '/v1/pet/', item);
    }

    updatePet(item: Pet) {
      return this.http.put<Pet>(this.serverLink + '/v1/pet/', item);
  }
}
