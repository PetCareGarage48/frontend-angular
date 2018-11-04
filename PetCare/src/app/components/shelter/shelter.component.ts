import { Component, OnInit, Input } from '@angular/core';
import { Shelter, ShelterService } from 'src/app/services/shelter.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-shelter',
  templateUrl: './shelter.component.html',
  styleUrls: ['./shelter.component.scss']
})
export class ShelterComponent implements OnInit {
  @Input() shelter: Shelter;
  shelterForm: FormGroup;

  constructor(private service: ShelterService) {
  }

  ngOnInit() {
    if (this.shelter) {
      this.shelterForm = new FormGroup({
        title: new FormControl(this.shelter.title),
        email: new FormControl(this.shelter.email),
        description: new FormControl(this.shelter.description)
      });
    } else {
      this.initializeEmptyForm();
    }
  }

  onSubmit() {
    this.shelter.title = this.shelterForm.value.title;
    this.shelter.email = this.shelterForm.value.email;
    this.shelter.description = this.shelterForm.value.description;

      this.service.updateShelter(this.shelter)
      .subscribe(() => console.log('updated'));
  }

  private initializeEmptyForm() {
    this.shelterForm = new FormGroup({
    title: new FormControl(null),
    email: new FormControl(null),
    description: new FormControl(null)
  });
}

}
