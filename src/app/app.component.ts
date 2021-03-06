import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //String interpolation va desde el typescript al html
  ///varibles
  title = 'Square';
  a = 3;
  b = 5; 
  nombre1:String;
  nombre2:String;
  habilita = false;
  lugares:any = [
    {
      plan:"pagado", cercania:1, distancia: 10, active:true,  nombre: 'mercado'
    },{
      plan:"gratuito", cercania:1, distancia: 1.8, active:false,  nombre: 'papeleria'
    },{
      plan:"pagado", cercania:2, distancia: 5, active:true,  nombre: 'odontologia'
    }, {
      plan:"gratuito", cercania:3, distancia: 1, active:true,  nombre: 'veterinaria'
    },{
      plan:"gratuito", cercania:2, distancia: 35, active:false,  nombre: 'ferreteria'
    },{
      plan:"pagado", cercania:3, distancia: 102, active:true,  nombre: 'ploter'
    }];
  lat:number = 5.0178418;
  lng:number = -74.000535;
  //funciones
  constructor(){
    setTimeout(() => {
      this.habilita = true;
    }, 3000);
  }
  hacerAlgo(){
    alert("Ha dado click xD");
  }
}