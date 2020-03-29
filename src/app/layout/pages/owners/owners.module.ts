import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwnersComponent } from './owners.component';
import { OwnerListComponent } from './components/owner-list/owner-list.component';
import { OwnerDetailComponent } from './components/owner-detail/owner-detail.component';
import { VehicleListComponent } from './components/vehicle-list/vehicle-list.component';
import { VehicleDetailComponent } from './components/vehicle-detail/vehicle-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from 'src/app/shared/modules/material.module';


const routes: Routes = [
  {
    path: '', component: OwnersComponent, children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: OwnerListComponent },
      { path: 'details', component: OwnerDetailComponent },
      { path: 'details/:id', component: OwnerDetailComponent }
    ]
  }
]

@NgModule({
  declarations: [
    OwnersComponent,
    OwnerListComponent,
    OwnerDetailComponent,
    VehicleListComponent,
    VehicleDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule
  ],
  entryComponents: [VehicleDetailComponent]
})
export class OwnersModule { }
