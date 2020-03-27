import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserDeailComponent } from './components/user-deail/user-deail.component';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/shared/modules/material.module';
import { UserHistoryComponent } from './components/user-deail/user-history/user-history.component';
import {UserSearchDriverComponent} from './components/user-deail/user-search-driver/user-search-driver.component'

const routes: Routes = [
  {
    path: '', component: UsersComponent, children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: UserListComponent },
      { path: 'detail', component: UserDeailComponent }
    ]
  }
]
@NgModule({
  declarations: [UsersComponent, UserListComponent, UserDeailComponent,
    UserHistoryComponent,
    UserSearchDriverComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule
  ]
})
export class UsersModule { }
