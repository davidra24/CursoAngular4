import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  //Todos los componentes ej: home, contact, about us, etc...
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    //Importa formsmodule utilizado en components.ts
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
