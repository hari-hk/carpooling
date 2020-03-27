import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-driver-list',
    templateUrl: 'driver-list.component.html',
    styleUrls: ['driver-list.component.scss']
})

export class DriverListComponent implements OnInit {

    constructor(public router: Router) { }

    ngOnInit() {
    }
    openDetail() {
        // this.router.navigate(['/layout/users/detail/21'])
    }

}