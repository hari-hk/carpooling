import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-avalibility',
    templateUrl: 'avalibility.component.html',
    styleUrls: ['avalibility.component.scss']
})

export class AvailabilityComponent implements OnInit {

    availableList = [
        { driverId: 1231234, status: 0, offlineReason: '', vehicleId: 6787685, rideId: 1203933, carType: 'Mini' },
        { driverId: 1231234, status: 1, offlineReason: 'Breakdown', vehicleId: 6787685, rideId: '', carType: 'Micro' },
        { driverId: 1231234, status: 0, offlineReason: '', vehicleId: 6787685, rideId: 1203933, carType: 'MUV' },
        { driverId: 1231234, status: 0, offlineReason: '', vehicleId: 6787685, rideId: 1203933, carType: 'Sedan' },
        { driverId: 1231234, status: 0, offlineReason: '', vehicleId: 6787685, rideId: 1203933, carType: 'XUV' },
        { driverId: 1231234, status: 0, offlineReason: '', vehicleId: 6787685, rideId: 1203933, carType: 'XUV' },
        { driverId: 1231234, status: 0, offlineReason: '', vehicleId: 6787685, rideId: 1203933, carType: 'Sedan' },
        { driverId: 1231234, status: 1, offlineReason: 'out of service', vehicleId: 6787685, rideId: 1203933, carType: 'Mini' }
    ]
    constructor() { }

    ngOnInit() { }
    openDetail() {

    }
}