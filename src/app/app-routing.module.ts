import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EncuestasPreguntasComponent } from '../app/encuestas-preguntas/encuestas-preguntas.component'
import { ListEncuestasComponent } from '../app/list-encuestas/list-encuestas.component'
import { AvisoComponent } from './aviso/aviso.component';

const routes: Routes = [ 
{
  path: "data",
  component: EncuestasPreguntasComponent,
},
{
  path: "encuestas",
  component: ListEncuestasComponent
},
{
path: "aviso",
component: AvisoComponent
}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
