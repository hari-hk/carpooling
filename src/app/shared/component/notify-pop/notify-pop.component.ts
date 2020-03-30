import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material';

@Component({
    selector: 'app-notify-pop',
    templateUrl: 'notify-pop.component.html',
    styleUrls: ['notify-pop.component.scss']
})

export class NotifyPopComponent implements OnInit {
    constructor(public router: Router,
        public dialogRef: MatDialogRef<any>) { }

    ngOnInit() { }
    openNotification(data?: any) {
        this.dialogRef.close(data);
    }
}