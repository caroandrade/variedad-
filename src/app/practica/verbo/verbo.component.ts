import { LowerCasePipe, NgIf } from '@angular/common';
import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { verbos } from '../caro/listaelementos';


@Component({
  selector: 'app-verbo',
  templateUrl: './verbo.component.html',
  styleUrls: ['./verbo.component.scss']
})
export class VerboComponent implements OnInit, DoCheck, OnDestroy {
          public nombre: string;
          public verbo: String;
          public verbo2: String;
          public verbo3: String;

          public ejemplo:string;
          public mensaje:string;
          public mensaje2:string;
          public mensaje3:string;
       

  constructor() { 
      this.nombre="Andrade";
      this.verbo= "";
      this.verbo2= "";
      this.verbo3= "";
      this.ejemplo="";
      this.mensaje="";
      this.mensaje2="";
      this.mensaje3="";
  }

  ngOnInit() {
    console.log("esto se ejecuta cuando carga componente")
  }
ngDoCheck(){
  console.log("hola cambiando ")
}
ngOnDestroy(){
  console.log("chau ")
}
comprobar(){
  
  
  if (this.verbo==="saltó"){
    this.mensaje="correcto";
  }else{
    this.mensaje="sigue probando";
  }
  
}
comprobar2(){
  
  
  if (this.verbo2==="correrán"){
    this.mensaje2="correcto";
        }else{
    this.mensaje2="sigue probando";
       }
      }
comprobar3(){
  
  
  if (this.verbo3==="hubiera escrito"){
    this.mensaje3="correcto";
        }else{
    this.mensaje3="sigue probando";
       }

}

      

}
