import {
  Component,
  Injectable,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

import { PersonagemModel } from '../../model/personagem.model';
import { PersonagensService } from '../../service/personagens.service';

@Component({
  selector: 'rm-personagens',
  templateUrl: './personagens.component.html',
  styleUrls: ['./personagens.component.css'],
})
@Injectable({
  providedIn: 'root',
})
export class PersonagensComponent implements OnChanges {
  @Input() personagens: PersonagemModel[] = [];

  linhas: any[] = [];

  episodio: string;

  constructor(private _personagensService: PersonagensService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['personagens']) {
      this.linhas = this.colunas(this.personagens);
    }
  }

  colunas(personagens: PersonagemModel[]) {
    const novasLinhas = [];

    for (let index = 0; index < personagens.length; index += 4) {
      novasLinhas.push(personagens.slice(index, index + 4));
    }
    return novasLinhas;
  }
  personagemDetalhes(id: number): void {
    this._personagensService.detalhesPersonagens(id).subscribe((res) => {
      res.episode;     
    });   
  } 
}