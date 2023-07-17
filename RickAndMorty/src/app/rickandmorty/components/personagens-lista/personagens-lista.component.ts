import { Component, OnInit } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';

import { FiltroModel } from '../model/filtro.model';
import { PersonagemModel } from '../model/personagem.model';
import { PersonagensService } from '../service/personagens.service';

@Component({
  selector: 'rm-personagens-lista',
  templateUrl: './personagens-lista.component.html',
  styleUrls: ['./personagens-lista.component.css'],
})
export class PersonagensListaComponent implements OnInit {
  debounce: Subject<string> = new Subject();
  personagens: PersonagemModel[] = [];
  personagemFiltro = {
    name: '',
    species: '',
    gender: '',
    status: '',
  } as PersonagemModel;
  ultimaPagina: boolean = false;
  paginaAtual: number = 1;
  episodios = [];
  valores = '';

  tiposEspecies: string[] = [
    'Humanoid',
    'Poopybutthole',
    'Mythological',
    'Unknown',
    'Animal',
    'Disease',
    'Robot',
    'Cronenberg',
    'Planet',
  ];
  tiposGeneros: string[] = ['Genderless'];
  tiposStatus: string[] = [];

  constructor(private _personagensService: PersonagensService) {}

  ngOnInit(): void {
    this._personagensService.listarPersonagens().subscribe((res) => {
      this.personagens = res.results;

      this.personagens.forEach((personagem) => {
        this.tiposStatus.push(personagem.status);
        this.tiposEspecies.push(personagem.species);
        this.tiposGeneros.push(personagem.gender);
        this.episodios.push(personagem.episode);
      });

      this.tiposStatus = [...new Set(this.tiposStatus)];
      this.tiposEspecies = [...new Set(this.tiposEspecies)];
      this.tiposGeneros = [...new Set(this.tiposGeneros)];

      this.debounce.pipe(debounceTime(300)).subscribe((filtro) => {
        this.filtrarNome(filtro);
      });
    });
  }
  ngOnDestroy(): void {
    this.debounce.unsubscribe;
  }

  limparFiltroAlert(): void {
    this.personagemFiltro.name = '';
    this._personagensService
      .filtrosPersonagens(this.personagemFiltro, this.paginaAtual)
      .subscribe((res) => {
        this.personagens = res.results;
      });
  }

  //-- Inicio dos filtros individuais --

  filtrarNome(nome: string) {
    this.personagemFiltro.name = nome;

    this._personagensService
      .filtrosPersonagens(this.personagemFiltro, this.paginaAtual)
      .subscribe(
        (res) => {
          this.personagens = res.results;
        },
        () => {
          alert('Personagem não encontrado!');
          this.limparFiltroAlert();
        }
      );
  }

  filtrarEspecies(especie: FiltroModel) {
    this.personagemFiltro.species = especie.evento;

    this._personagensService
      .filtrosPersonagens(this.personagemFiltro, this.paginaAtual)
      .subscribe((res) => {
        this.personagens = res.results;
      });
  }

  filtrarGeneros(genero: FiltroModel) {
    this.personagemFiltro.gender = genero.evento;
    this._personagensService
      .filtrosPersonagens(this.personagemFiltro, this.paginaAtual)
      .subscribe((res) => {
        this.personagens = res.results;
      });
  }

  filtrarStatus(status: FiltroModel) {
    this.personagemFiltro.status = status.evento;
    this._personagensService
      .filtrosPersonagens(this.personagemFiltro, this.paginaAtual)
      .subscribe((res) => {
        this.personagens = res.results;
      });
  }

  //--Fim dos filtros individuais--

  carregarNovosPersonagens() {
    this.paginaAtual++;
    this._personagensService
      .filtrosPersonagens(this.personagemFiltro, this.paginaAtual)
      .subscribe((res: any) => {
        this.personagens = this.personagens.concat(res.results);
        this.ultimaPagina = res.info.pages == this.paginaAtual;
      });
  }
}
