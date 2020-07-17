import { Component, OnInit, Output, EventEmitter, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  @Output() toggleNotificationMenu = new EventEmitter<string>();

  showSearchResult: boolean;
  searchQuery: string;
  constructor(private router: Router) { }

  ngOnInit() {
  }
  openNotification() {
    this.toggleNotificationMenu.emit();
  }
  gotoProfile() {
    this.router.navigate(['/layout/profile']);
  }

  searchById(event) {
    console.log(this.searchQuery);
    if (this.searchQuery) {
      this.showSearchResult = true;
    } else {
      this.showSearchResult = false;
    }
  }
  navigateTo() {
    console.log('navigate to page');
  }
  @HostListener('click', ['$event']) onClick(event) {
    this.showSearchResult = false;
  }
}
