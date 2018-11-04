import { Component, OnInit } from '@angular/core';
import { Shelter, ShelterService } from 'src/app/services/shelter.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-shelter',
  templateUrl: './shelter.component.html',
  styleUrls: ['./shelter.component.scss']
})
export class ShelterComponent implements OnInit {
  shelter: Shelter;

  shelterForm: FormGroup;

  constructor(private service: ShelterService) {
   }

  ngOnInit() {
   this.service.getShelter(null).subscribe(shelter => {
     this.shelter = shelter;
     this.shelterForm = new FormGroup({
      name: new FormControl(this.shelter.name),
      email: new FormControl(this.shelter.email),
      address: new FormControl(this.shelter.address),
      description: new FormControl(this.shelter.description)
    });
    });
  }

  onSubmit() {
    this.service.updateShelter(this.shelterForm.value);
  }

}
