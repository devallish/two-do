import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { MainNavigationComponent } from '@td/main-navigation/main-navigation.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule
  ],
  exports: [
    MainNavigationComponent
  ],
  declarations: [
    MainNavigationComponent
  ]
})
export class CoreModule { }
