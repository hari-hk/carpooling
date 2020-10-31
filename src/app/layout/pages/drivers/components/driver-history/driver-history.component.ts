import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
    selector: 'app-driver-history',
    templateUrl: 'driver-history.component.html',
    styleUrls: ['driver-history.component.scss']
})

export class DriverHistoryComponent implements OnInit {
    filter: any = {
        toDate: this.datePipe.transform(new Date(new Date()), 'yyyy-MM-dd'),
        fromDate: this.datePipe.transform(new Date().setMonth(new Date().getMonth() - 1), 'yyyy-MM-dd')
    };

    constructor(
        public datePipe: DatePipe,
        private router: Router) { }

    ngOnInit() { }

    openDetail() {
        this.router.navigate(['layout/drivers/history-detail']);
    }
}
