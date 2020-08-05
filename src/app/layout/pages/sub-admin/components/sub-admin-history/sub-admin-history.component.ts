import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
    selector: 'app-sub-admin-history',
    templateUrl: 'sub-admin-history.component.html',
    styleUrls: ['sub-admin-history.component.scss']
})

export class SubAdminHistoryComponent implements OnInit {
    filter: any = {
        toDate: this.datePipe.transform(new Date(new Date()), 'yyyy-MM-dd'),
        fromDate: this.datePipe.transform(new Date().setMonth(new Date().getMonth() - 1), 'yyyy-MM-dd')
    };

    constructor(public datePipe: DatePipe) { }

    ngOnInit() { }
}