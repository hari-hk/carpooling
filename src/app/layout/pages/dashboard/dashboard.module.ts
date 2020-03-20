import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from 'src/app/shared/modules/material.module';
import { ChartsModule } from 'ng2-charts';

const routes: Routes = [
  { path: '', component: DashboardComponent }]
@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ChartsModule,
    RouterModule.forChild(routes)
  ]
})
export class DashboardModule { }
