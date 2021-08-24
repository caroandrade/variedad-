import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
  
})
export class AppComponent {
  title = 'Actividades Varias - Práctica de Angular';
  public mostrarVerbo: boolean= true;


  ocultarVerbo(){
    this.mostrarVerbo = false;
  }
}
