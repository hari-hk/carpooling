import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddRideComponent } from '../add-ride/add-ride.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  chartOptions = {
    responsive: true
  };

  chartData = [
    { data: [330, 600, 260, 700], label: 'Rides' },
    { data: [120, 455, 100, 340], label: 'Outstation' },
    { data: [45, 67, 800, 500], label: 'Cancellations' }
  ];

  chartLabels = ['January', 'February', 'Mars', 'April'];

  constructor(public dialog: MatDialog,
    public router: Router) { }

  ngOnInit() {
  }
  onChartClick(event) {
    console.log(event);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddRideComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      this.router.navigate(['./layout/users/detail/12']);
    });
  }
}
