import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DynamicHostDirective } from './directives/dynamic-host.directive';
import { DynamicComponent } from './dynamic/dynamic.component';



@NgModule({
  declarations: [
    AppComponent,
    DynamicHostDirective,
    DynamicComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
