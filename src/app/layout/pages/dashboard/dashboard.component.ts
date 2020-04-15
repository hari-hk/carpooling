import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddRideComponent } from '../add-ride/add-ride.component';
import { Router } from '@angular/router';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public lineChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'users' },
    { data: [44, 55, 20, 22, 56, 90, 40], label: 'Rides' }
  ];
  public lineChartLabels: Label[] = ['2018', '2019', '2020'];
  public lineChartOptions = {
    responsive: true,
  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];

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
      if (result === 'search') {
        this.router.navigate(['./layout/users/detail/12']);
      }
    });
  }
  showCars(page) {
    this.router.navigate(['./layout/availability']);
  }
}
