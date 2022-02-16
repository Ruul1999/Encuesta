import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncuestasPreguntasComponent } from './encuestas-preguntas/encuestas-preguntas.component';
import { ListEncuestasComponent } from './list-encuestas/list-encuestas.component';
import { AvisoComponent } from './aviso/aviso.component';

@NgModule({
  declarations: [
    AppComponent,
    EncuestasPreguntasComponent,
    ListEncuestasComponent,
    AvisoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
