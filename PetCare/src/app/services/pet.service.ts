import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { pets } from '../../mocks/pets.js';
import { of } from 'rxjs';


export interface Pet {
  name: string;
  age: number;
  description: string;
  type: string;
  gender: string;
  photos: string[];
}

@Injectable()
export class PetService {
  private serverLink = environment.API_URL;

  constructor(private http: HttpClient) { }

    getPets() {
        return this.http.get<any>(this.serverLink + '/v1/pets')
        .pipe(map(res => res.data.map(p => p as Pet)));
    }

    addPet(item: Pet) {
        return this.http.post<Pet>(this.serverLink + '/v1/pet/', item);
    }

    updatePet(item: Pet) {
      return this.http.put<Pet>(this.serverLink + '/v1/pet/', item);
  }
}
