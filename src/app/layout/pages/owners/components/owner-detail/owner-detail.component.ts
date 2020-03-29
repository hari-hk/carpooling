import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VehicleDetailComponent } from '../vehicle-detail/vehicle-detail.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-owner-detail',
  templateUrl: './owner-detail.component.html',
  styleUrls: ['./owner-detail.component.scss']
})
export class OwnerDetailComponent implements OnInit {
  id: any;
  constructor(public route: ActivatedRoute,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.route.paramMap
      .subscribe((data: any) => {
        this.id = data.params ? data.params.id : '';
      });
  }

  addVehicle(): void {
    const dialogRef = this.dialog.open(VehicleDetailComponent, {
      width: '450px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      // this.router.navigate(['./layout/users/detail/12']);
    });
  }

}
