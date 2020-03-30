import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-assign-ride',
    templateUrl: 'assign-ride.component.html',
    styleUrls: ['assign-ride.component.scss']
})

export class AssignRideComponent implements OnInit {
    bookingType = '';
    constructor() { }

    ngOnInit() { }
}