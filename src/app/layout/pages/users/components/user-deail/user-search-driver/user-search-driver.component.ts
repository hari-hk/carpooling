import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { CommonPopUpComponent } from 'src/app/shared/component/common-popup/common-popup.component';
import { ConfirmBookingComponent } from '../confirm-booking/confirm-booking.component';

@Component({
    selector: 'app-user-search-driver',
    templateUrl: 'user-search-driver.component.html',
    styleUrls: ['user-search-driver.component.scss']
})

export class UserSearchDriverComponent implements OnInit {
    constructor(public dialog: MatDialog) { }

    ngOnInit() { }
    bookCab(): void {
        const dialogRef = this.dialog.open(ConfirmBookingComponent, {
            data: { message: 'successfully created ride' }
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed', result);
        });
    }
}