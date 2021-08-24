import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'caro-componet',
    templateUrl: './caro.component.html',
    styleUrls: ['./caro.component.scss'],
})
    
export class CaroComponent  {
      
  public titulo: string;
  public nombre: string;

  constructor() { 
    this.titulo = "Carolina probando";
    this.nombre = "Vamos a probar";
}
}