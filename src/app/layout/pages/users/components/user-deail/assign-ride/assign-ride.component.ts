import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-assign-ride',
    templateUrl: 'assign-ride.component.html',
    styleUrls: ['assign-ride.component.scss']
})

export class AssignRideComponent implements OnInit {

    @Output() search = new EventEmitter();
    bookingType = '';
    constructor() { }

    ngOnInit() { }
    searchVehicle() {
        this.search.emit();
    }
}