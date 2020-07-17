import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { MaterialModule } from '../shared/modules/material.module';
import { AvailabilityComponent } from './pages/avalibility/avalibility.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '', component: LayoutComponent, children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', loadChildren: './pages/dashboard/dashboard.module#DashboardModule' },
      { path: 'drivers', loadChildren: './pages/drivers/drivers.module#DriversModule' },
      { path: 'sub-admin', loadChildren: './pages/sub-admin/sub-admin.module#SubAdminModule' },
      { path: 'users', loadChildren: './pages/users/users.module#UsersModule' },
      { path: 'owners', loadChildren: './pages/owners/owners.module#OwnersModule' },
      { path: 'tariff', loadChildren: './pages/tariff/tariff.module#TariffModule' },
      { path: 'availability', component: AvailabilityComponent },
      { path: 'profile', component: ProfileComponent }
    ]
  }
]


@NgModule({
  declarations: [LayoutComponent,
    HeaderComponent,
    MenuComponent,
    AvailabilityComponent,
    ProfileComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    MaterialModule
  ]
})
export class LayoutModule { }
