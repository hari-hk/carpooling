import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }
  openDetail() {
    this.router.navigate(['/layout/users/detail/21'])
  }

}
