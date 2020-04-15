import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { MaterialModule } from '../shared/modules/material.module';
import { AvailabilityComponent } from './pages/avalibility/avalibility.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent, children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', loadChildren: './pages/dashboard/dashboard.module#DashboardModule' },
      { path: 'drivers', loadChildren: './pages/drivers/drivers.module#DriversModule' },
      { path: 'users', loadChildren: './pages/users/users.module#UsersModule' },
      { path: 'owners', loadChildren: './pages/owners/owners.module#OwnersModule' },
      { path: 'availability', component: AvailabilityComponent }
    ]
  }
]

@NgModule({
  declarations: [LayoutComponent, HeaderComponent, MenuComponent, AvailabilityComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule
  ]
})
export class LayoutModule { }
