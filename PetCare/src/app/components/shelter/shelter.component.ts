import { Component, OnInit, Input } from '@angular/core';
import { Shelter } from 'src/app/services/shelter.service';

@Component({
  selector: 'app-shelter',
  templateUrl: './shelter.component.html',
  styleUrls: ['./shelter.component.scss']
})
export class ShelterComponent implements OnInit {
  @Input() shelter: Shelter;

  constructor() {
   }

  ngOnInit() {
  }

}
