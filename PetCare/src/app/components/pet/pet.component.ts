import { Component, OnInit, Input } from '@angular/core';
import { Pet } from 'src/app/services/pet.service';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.scss']
})
export class PetComponent implements OnInit {
  @Input() pet: Pet;

  constructor() { }

  ngOnInit() {
  }

}
