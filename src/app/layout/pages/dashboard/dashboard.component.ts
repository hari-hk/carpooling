import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }
  onChartClick(event) {
    console.log(event);
  }
}
