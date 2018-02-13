import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //String interpolation va desde el typescript al html
  title = 'Square';
  a = 3;
  b = 5; 
  nombre1:String;
  nombre2:String;
  habilita = false;
  constructor(){
    setTimeout(() => {
      this.habilita = true;
    }, 3000);
  }
  hacerAlgo(){
    alert("Ha dado click xD");
  }
}