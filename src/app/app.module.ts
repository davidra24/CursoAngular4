import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { ResaltarDirective } from './directives/resaltar.directive';
import { ContarClicksDirective } from './directives/contar.clicks.directive';



@NgModule({
  //Todos los componentes ej: home, contact, about us, etc...
  declarations: [
    AppComponent,
    //se llama al export de la directiva para usarla 
    ResaltarDirective,
    ContarClicksDirective
  ],
  imports: [
    BrowserModule,
    //Importa formsmodule utilizado en components.ts
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: ' AIzaSyDm9KJg0c9c_R2ZUdwesZ-VwwrI9e-9aAk '
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
