import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { CaroComponent } from './practica/caro/caro.component';
import { FormsModule } from '@angular/forms';
import { VerboComponent } from './practica/verbo/verbo.component'; // <-- NgModel lives here


@NgModule({
  declarations: [
    AppComponent,
    CaroComponent,
    VerboComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
