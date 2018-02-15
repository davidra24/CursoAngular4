import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';



@NgModule({
  //Todos los componentes ej: home, contact, about us, etc...
  declarations: [
    AppComponent
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
