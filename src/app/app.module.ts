import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/modules/material.module';
import { CommonPopUpComponent } from './shared/component/common-popup/common-popup.component'
import { NotifyPopComponent } from './shared/component/notify-pop/notify-pop.component';

@NgModule({
  declarations: [
    AppComponent,
    CommonPopUpComponent,
    NotifyPopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [CommonPopUpComponent,
    NotifyPopComponent]
})
export class AppModule { }
