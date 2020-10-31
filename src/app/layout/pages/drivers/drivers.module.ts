import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DriversComponent } from './drivers.component';
import { MaterialModule } from 'src/app/shared/modules/material.module';
import { RouterModule, Routes } from '@angular/router';
import { DriverListComponent } from '../drivers/components/driver-list/driver-list.component';
import { DriverDetailComponent } from './components/driver-detail/driver-detail.component';
import { DriverHistoryComponent } from './components/driver-history/driver-history.component';
import { FormsModule } from '@angular/forms';
import { DriverHistoryDetailComponent } from './components/driver-history-detail/driver-history-detail.component';

const routes: Routes = [
  {
    path: '', component: DriversComponent, children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: DriverListComponent },
      { path: 'detail', component: DriverDetailComponent },
      { path: 'history', component: DriverHistoryComponent },
      { path: 'detail/:id', component: DriverDetailComponent },
      { path: 'history-detail', component: DriverHistoryDetailComponent }
    ]
  }]
@NgModule({
  declarations: [
    DriversComponent,
    DriverListComponent,
    DriverDetailComponent,
    DriverHistoryComponent,
    DriverHistoryDetailComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class DriversModule { }
