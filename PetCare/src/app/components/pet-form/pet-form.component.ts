import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Pet, PetService } from 'src/app/services/pet.service';

@Component({
  selector: 'app-pet-form',
  templateUrl: './pet-form.component.html',
  styleUrls: ['./pet-form.component.scss']
})
export class PetFormComponent implements OnInit {
  title: string;
  pet: Pet;

  constructor(
    private service: PetService,
    public dialogRef: MatDialogRef<PetFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {
      this.pet = this.data.pet;
      this.title = !this.data.isCreate ? 'Update' : 'Create' ;
      }

    ngOnInit() {
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  update(): void {
    if (!this.data.isCreate) {
      this.service.addPet(this.data.pet)
      .subscribe( () => this.dialogRef.close());
    }
    this.service.updatePet(this.data.pet)
    .subscribe( () => this.dialogRef.close());
  }

}
