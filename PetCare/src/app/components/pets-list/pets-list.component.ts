import { Component, OnInit } from '@angular/core';
import { PetService, Pet } from 'src/app/services/pet.service';

@Component({
  selector: 'app-pets-list',
  templateUrl: './pets-list.component.html',
  styleUrls: ['./pets-list.component.scss']
})
export class PetsListComponent implements OnInit {
  pets: Pet[];

  constructor(private service: PetService) { }

  ngOnInit() {
    this.service.getPets()
    .subscribe(pets => this.pets = pets);
  }

}
