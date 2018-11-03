import { Component, OnInit, Input } from '@angular/core';
import { Shelter, ShelterService } from 'src/app/services/shelter.service';

@Component({
  selector: 'app-shelter',
  templateUrl: './shelter.component.html',
  styleUrls: ['./shelter.component.scss']
})
export class ShelterComponent implements OnInit {
  shelter: Shelter;

  constructor(private service: ShelterService) {
   }

  ngOnInit() {
   this.service.getShelter().subscribe(shelter =>
     this.shelter = shelter);
  }

}
