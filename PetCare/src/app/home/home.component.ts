import { Component, OnInit } from '@angular/core';
import { Shelter, ShelterService } from '../services/shelter.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 shelter: Shelter;

  constructor(private service: ShelterService) {
    this.service.getShelter().subscribe(shelter => {
        this.shelter = shelter.data;
      });
   }

  ngOnInit() {
  }

}
