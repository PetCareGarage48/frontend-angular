import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { pets } from '../../mocks/pets.js';
import { of } from 'rxjs';

export interface Pet {
  id: string;
  shelterId: string;
  name: string;
  age: number;
  description: string;
  type: string;
  gender: string;
  photos: string[];
}

@Injectable()
export class PetService {
  private serverLink = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getPets(id) {
    return this.http
      .get<any>(this.serverLink + '/pets/shelter?shelterId=' + id)
      .pipe(map(res => res.data.map(p => p as Pet)));
  }

  addPet(item: Pet) {
    return this.http.post<Pet>(this.serverLink + '/pets/pet', item, {headers: this.getAuthHeader()});
  }

  updatePet(item: Pet) {
    return this.http.put<Pet>(this.serverLink + '/pets/pet', item, {headers: this.getAuthHeader()});
  }

  uploadImage(file, id) {
    const uploadData = new FormData();
    uploadData.append('multipartFile', file);
    const headers = this.getAuthHeader();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');
    return this.http.post<string>(this.serverLink + '/pets/pet/photo/save?id=' + id, uploadData, {headers});
  }

  removePet(id) {
    return this.http.delete(this.serverLink + '/pets?petId=' + id, {headers: this.getAuthHeader()});
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
