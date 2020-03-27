import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
    selector: 'app-common-popup',
    templateUrl: 'common-popup.component.html',
    styleUrls: ['common-popup.component.scss']
})

export class CommonPopUpComponent implements OnInit {
    constructor(public dialogRef: MatDialogRef<CommonPopUpComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any) { }

    ngOnInit() { }
    onNoClick(): void {
        this.dialogRef.close();
    }
}