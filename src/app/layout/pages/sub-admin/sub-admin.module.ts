import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { SubAdminComponent } from './sub-admin.component';
import { MaterialModule } from 'src/app/shared/modules/material.module';
import { RouterModule, Routes } from '@angular/router';
import { SubAdminListComponent } from './components/sub-admin-list/sub-admin-list.component';
import { SubAdminDetailComponent } from './components/sub-admin-detail/sub-admin-detail.component';
import { SubAdminHistoryComponent } from './components/sub-admin-history/sub-admin-history.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '', component: SubAdminComponent, children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: SubAdminListComponent },
      { path: 'detail', component: SubAdminDetailComponent },
      { path: 'history', component: SubAdminHistoryComponent },
      { path: 'detail/:id', component: SubAdminDetailComponent }
    ]
  }]
@NgModule({
  declarations: [
    SubAdminComponent,
    SubAdminListComponent,
    SubAdminDetailComponent,
    SubAdminHistoryComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  providers: []
})
export class SubAdminModule { }
