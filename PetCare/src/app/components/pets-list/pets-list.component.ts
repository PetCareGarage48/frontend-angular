import { Component, OnInit } from '@angular/core';
import { PetService, Pet } from 'src/app/services/pet.service';
import { PetFormComponent } from '../pet-form/pet-form.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-pets-list',
  templateUrl: './pets-list.component.html',
  styleUrls: ['./pets-list.component.scss']
})
export class PetsListComponent implements OnInit {
  pets: Pet[];
  colums = 3;

  constructor(private service: PetService, public dialog: MatDialog) { }

  ngOnInit() {
    this.service.getPets()
    .subscribe(pets => {
      console.log(pets);
      this.pets = pets;
    });
    this.onResize(false);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(PetFormComponent, {
      width: '600px',
      data: {isCreate: true, pet: {}}
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('The dialog was closed');
    });
  }

  onResize(event) {
    const width = event ? event.target.innerWidth : window.innerWidth;

    if (width <= 600) {
      this.colums = 1;
    } else if (width > 600 && width <= 1000) {
      this.colums = 2;
    } else {
      this.colums = 3;
    }
  }
}
