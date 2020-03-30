import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-deail',
  templateUrl: './user-deail.component.html',
  styleUrls: ['./user-deail.component.scss']
})
export class UserDeailComponent implements OnInit {
  showDrivers = false;
  id: any = '';
  selected = 0;


  constructor(private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap
      .subscribe((data: any) => {
        this.id = data.params ? data.params.userId : '';
      });
    this.route.queryParams.subscribe((el: any) => {
      if (el.page === 'upcomming') {
        this.selected = 1;
      }
    })

  }

  changeSelected(event) {
    this.selected = event;
  }

}
