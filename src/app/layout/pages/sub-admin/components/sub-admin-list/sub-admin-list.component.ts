import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-sub-admin-list',
    templateUrl: './sub-admin-list.component.html',
    styleUrls: ['./sub-admin-list.component.scss']
})

export class SubAdminListComponent implements OnInit {

    constructor(public router: Router) { }

    ngOnInit() {
    }
    openDetail(){
        
    }
}