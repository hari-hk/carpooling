import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubAdminComponent } from './sub-admin.component';
import { MaterialModule } from 'src/app/shared/modules/material.module';
import { RouterModule, Routes } from '@angular/router';
import { SubAdminListComponent } from './components/sub-admin-list/sub-admin-list.component';
import { SubAdminDetailComponent } from './components/sub-admin-detail/sub-admin-detail.component';

const routes: Routes = [
  {
    path: '', component: SubAdminComponent, children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: SubAdminListComponent },
      { path: 'detail', component: SubAdminDetailComponent },
      { path: 'detail/:id', component: SubAdminDetailComponent }
    ]
  }]
@NgModule({
  declarations: [
    SubAdminComponent,
    SubAdminListComponent,
    SubAdminDetailComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ]
})
export class SubAdminModule { }
