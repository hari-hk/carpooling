import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { MaterialModule } from '../shared/modules/material.module';

const routes: Routes = [
  { path: '', component: LayoutComponent }
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
