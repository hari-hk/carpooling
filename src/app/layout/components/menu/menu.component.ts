import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NotifyPopComponent } from 'src/app/shared/component/notify-pop/notify-pop.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Output() toggleNotificationMenu = new EventEmitter<string>();

  constructor(public dialog: MatDialog,
    public router: Router) { }

  ngOnInit() {
  }
  openNotification() {
    const dialogRef = this.dialog.open(NotifyPopComponent, {
      width: '550px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.toggleNotificationMenu.emit();
        this.router.navigate(['layout/users/detail/12'], { queryParams: { page: 'upcomming' } })
      }
    });

  }
}
