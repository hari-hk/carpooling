import { NgModule } from '@angular/core';
import { TariffComponent } from './tariff.component';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


const routes: Routes = [
    {
        path: '', component: TariffComponent
    }
]

@NgModule({
    imports: [CommonModule,
        RouterModule.forChild(routes)
    ],
    declarations: [TariffComponent],
})
export class TariffModule { }
