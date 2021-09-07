import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
<<<<<<< Updated upstream

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CaroComponent } from './practica/caro/caro.component';
import { FormsModule } from '@angular/forms';
import { VerboComponent } from './practica/verbo/verbo.component'; // <-- NgModel lives here
=======
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

//rutas import
import { AppRoutingModule } from './app-routing.module';


//componentes import
import { HomeComponent } from './home/home.component';
import { PresentacionComponent } from './verbo/presentacion/presentacion.component';
import { GerundioComponent } from './verbo/gerundio/gerundio.component';

import { SustHomeComponent } from './sustantivo/sust-home/sust-home.component';

//material import 
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatToolbarModule} from '@angular/material/toolbar';

//modulos para animaciones

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

>>>>>>> Stashed changes


@NgModule({
  declarations: [
    AppComponent,
<<<<<<< Updated upstream
    CaroComponent,
    VerboComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
=======
    HomeComponent,
    PresentacionComponent,
    GerundioComponent,
    SustHomeComponent
      
    
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    FormsModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatRadioModule,
    MatTooltipModule,
    MatIconModule,
    AppRoutingModule,
    MatToolbarModule
    
    
  ],
  providers:  [
    
  ],
>>>>>>> Stashed changes
  bootstrap: [AppComponent]
})
export class AppModule { }
