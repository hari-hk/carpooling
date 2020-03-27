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
  constructor(private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap
      .subscribe((data: any) => {
        this.id = data.params ? data.params.userId : '';
      });
  }

}
