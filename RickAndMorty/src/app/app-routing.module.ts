import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { PersonagensDetalhesComponent } from './rickandmorty/components/personagens-detalhes/personagens-detalhes.component';
import { PersonagensListaComponent } from './rickandmorty/components/personagens-lista/personagens-lista.component';


const routes: Routes = [

  {
    path: 'character', component: PersonagensListaComponent
  },

  {
    path: 'character/:id', component: PersonagensDetalhesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
