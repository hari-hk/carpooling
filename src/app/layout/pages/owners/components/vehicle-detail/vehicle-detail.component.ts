import { Component, OnInit } from '@angular/core';
import { AddRideComponent } from '../../../add-ride/add-ride.component';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-vehicle-detail',
  templateUrl: './vehicle-detail.component.html',
  styleUrls: ['./vehicle-detail.component.scss']
})
export class VehicleDetailComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddRideComponent>) { }

  ngOnInit() {
  }
  onNoClick(): void {
    this.dialogRef.close();

  }
}
