import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { MaterialModule } from '../shared/modules/material.module';

const routes: Routes = [
  {
    path: '', component: LayoutComponent, children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', loadChildren: './pages/dashboard/dashboard.module#DashboardModule' },
      { path: 'drivers', loadChildren: './pages/drivers/drivers.module#DriversModule' },
      { path: 'users', loadChildren: './pages/users/users.module#UsersModule' }

    ]
  }
]

@NgModule({
  declarations: [LayoutComponent, HeaderComponent, MenuComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule
  ]
})
export class LayoutModule { }
