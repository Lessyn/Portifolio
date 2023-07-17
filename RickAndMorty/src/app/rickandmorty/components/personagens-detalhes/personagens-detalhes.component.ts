import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { EpisodiosModel } from '../model/episodios.model';
import { PersonagemModel } from '../model/personagem.model';
import { PersonagensService } from '../service/personagens.service';

@Component({
  selector: 'rm-personagem-detalhes',
  templateUrl: './personagens-detalhes.component.html',
  styleUrls: ['./personagens-detalhes.component.css'],
})
export class PersonagensDetalhesComponent implements OnInit {
  episodios: EpisodiosModel[] = [];
  personagem$: Observable<PersonagemModel>;
  episodios$: Observable<EpisodiosModel>;

  personagens: PersonagemModel[] = [];

  episodiosPersonagens: string[] = [];
  teste;

  constructor(
    private _route: ActivatedRoute,
    private _personagensService: PersonagensService
  ) {}

  ngOnInit(): void {
    this.personagem$ = this._personagensService.detalhesPersonagens(
      this._route.snapshot.params['id']
    );

    this.personagem$.subscribe((res) => {
      res.episode;

      res.episode.forEach((episodios) => {
        return this.episodiosPersonagens.push(apenasNumeros(episodios));
      });
      this._personagensService
        .listarEpisodios(this.episodiosPersonagens)
        .subscribe((res) => {
          if(Array.isArray(res)){
            this.episodios = res;
          } else{
            this.episodios.push(res);
          }
          console.log(this.episodios)
        });
    });

    function apenasNumeros(n: string) {
      var numeros = n.replace(/[^0-9]/g, '');
      return numeros.toString();
    }
  }
}
