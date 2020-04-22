import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddRideComponent } from '../add-ride/add-ride.component';
import { Router } from '@angular/router';
import { ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle,
  ApexLocale
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
  toolbar: ApexLocale;
};
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  // old chart data start here
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

  /***** old chart data end here**********/
  /***** latest chart data start here**********/
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: any;
  /***** latest chart data end here**********/





  constructor(public dialog: MatDialog,
    public router: Router) {
    this.chartOptions = {
      series: [
        {
          name: "Local Ride",
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
        },
        {
          name: "OutStation",
          data: [4, 14, 25, 12, 39, 42, 49, 59, 74]
        }
      ],
      chart: {
        height: 350,
        type: "area",
        toolbar: { show: false },
        zoom: { enabled: false }

      },
      title: {
        text: ""
      },
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"]
      }
    };
  }

  ngOnInit() {
  }
  onChartClick(event) {
    console.log(event);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddRideComponent, {
      width: '300px'
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
