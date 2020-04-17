import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  @Output() toggleNotificationMenu = new EventEmitter<string>();

  constructor(private router: Router) { }

  ngOnInit() {
  }
  openNotification() {
    this.toggleNotificationMenu.emit();
  }
  gotoProfile() {
    this.router.navigate(['/layout/profile']);
  }
}
