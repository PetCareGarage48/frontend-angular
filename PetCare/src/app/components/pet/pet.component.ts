import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pet } from 'src/app/services/pet.service';
import { MatDialog } from '@angular/material/dialog';
import { PetFormComponent } from '../pet-form/pet-form.component';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.scss']
})
export class PetComponent implements OnInit {
  @Input() pet: Pet;
  @Output() remove = new EventEmitter<string>();

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  public getPhoto() {
    return this.pet.photos ?  this.pet.photos[0] : 'assets/no-img.png';
  }

  onRemove() {
    this.remove.emit(this.pet.id);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(PetFormComponent, {
      width: '600px',
      data: { pet: this.pet}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}


