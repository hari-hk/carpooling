import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-owner-list',
  templateUrl: './owner-list.component.html',
  styleUrls: ['./owner-list.component.scss']
})
export class OwnerListComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }
  openDetail() {
    // this.router.navigate(['/layout/users/detail/21'])
  }

}
