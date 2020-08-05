import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
    selector: 'app-vehicle-history',
    templateUrl: 'vehicle-history.component.html',
    styleUrls: ['vehicle-history.component.scss']
})

export class VehicleHistoryComponent implements OnInit {
    filter: any = {
        toDate: this.datePipe.transform(new Date(new Date()), 'yyyy-MM-dd'),
        fromDate: this.datePipe.transform(new Date().setMonth(new Date().getMonth() - 1), 'yyyy-MM-dd')
    };

    constructor(public datePipe: DatePipe) { }

    ngOnInit() { }

    openDetail() {

    }
}