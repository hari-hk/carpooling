import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DriversComponent } from './drivers.component';
import { MaterialModule } from 'src/app/shared/modules/material.module';
import { RouterModule, Routes } from '@angular/router';
import { DriverListComponent } from '../drivers/components/driver-list/driver-list.component';

const routes: Routes = [
  {
    path: '', component: DriversComponent, children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: DriverListComponent }
    ]
  }]
@NgModule({
  declarations: [DriversComponent, DriverListComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ]
})
export class DriversModule { }
