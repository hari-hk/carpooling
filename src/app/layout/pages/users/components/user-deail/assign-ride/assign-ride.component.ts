import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-assign-ride',
    templateUrl: 'assign-ride.component.html',
    styleUrls: ['assign-ride.component.scss']
})

export class AssignRideComponent implements OnInit {

    @Output() search = new EventEmitter();
    bookingType = '';
    passengerCount = 1;


    lat = 51.678418;
    lng = 7.809007;
    constructor() { }

    ngOnInit() { }
    searchVehicle() {
        this.search.emit();
    }
}