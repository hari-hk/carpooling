import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-ride',
  templateUrl: './add-ride.component.html',
  styleUrls: ['./add-ride.component.scss']
})
export class AddRideComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddRideComponent>,
  ) { }

  ngOnInit() {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
