import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PersonagensListaModule } from './rickandmorty/components/personagens-lista/personagens-lista.module';
import { PersonagensDetalhesModule } from './rickandmorty/components/personagens-detalhes/personagens-detalhes.module';

@NgModule({
  declarations: [
    AppComponent,     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,    
    PersonagensListaModule,
    PersonagensDetalhesModule
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
