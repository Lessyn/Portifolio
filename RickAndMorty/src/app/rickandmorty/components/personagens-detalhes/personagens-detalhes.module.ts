import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PersonagensDetalhesComponent } from './personagens-detalhes.component';


@NgModule({
  declarations: [PersonagensDetalhesComponent],
  exports: [PersonagensDetalhesComponent],
  imports: [CommonModule],
})
export class PersonagensDetalhesModule {}