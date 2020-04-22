import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-avalibility',
    templateUrl: 'avalibility.component.html',
    styleUrls: ['avalibility.component.scss']
})

export class AvailabilityComponent implements OnInit {

    availableList = [
        { driverId: 1231234, status: 0, offlineReason: '', vehicleId: 6787685, rideId: 1203933 },
        { driverId: 1231234, status: 1, offlineReason: 'Breakdown', vehicleId: 6787685, rideId: '' },
        { driverId: 1231234, status: 0, offlineReason: '', vehicleId: 6787685, rideId: 1203933 },
        { driverId: 1231234, status: 0, offlineReason: '', vehicleId: 6787685, rideId: 1203933 },
        { driverId: 1231234, status: 0, offlineReason: '', vehicleId: 6787685, rideId: 1203933 },
        { driverId: 1231234, status: 0, offlineReason: '', vehicleId: 6787685, rideId: 1203933 },
        { driverId: 1231234, status: 0, offlineReason: '', vehicleId: 6787685, rideId: 1203933 },
        { driverId: 1231234, status: 1, offlineReason: 'out of service', vehicleId: 6787685, rideId: 1203933 }
    ]
    constructor() { }

    ngOnInit() { }
    openDetail() {

    }
}