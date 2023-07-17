import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { EpisodiosModel } from '../model/episodios.model';
import { PersonagemModel } from '../model/personagem.model';

const API = `https://rickandmortyapi.com/api/`;

@Injectable({
  providedIn: 'root',
})
export class PersonagensService {
  constructor(private _http: HttpClient) {}

  listarPersonagens(): Observable<any> {
    return this._http.get<any>(API + 'character/');
  }

  filtrosPersonagens(
    personagem: PersonagemModel,
    pagina: number
  ): Observable<any> {
    return this._http.get<any>(
      API +
        `character/?page=${pagina}&name=${personagem.name}&status=${personagem.status}&species=${personagem.species}&gender=${personagem.gender}`
    );
  }

  detalhesPersonagens(id: number) {
    return this._http.get<any>(API + `character/${id}`);
  }

  // listarEpisodios(id: number): Observable<any> {
  //   return this._http.get<any>(API + `episode/${id}`)
  //   .pipe(switchMap(episodio => new Observable(observer => {
  //     forkJoin(episodio.id.map((characters: string) => this._http.get(characters))).subscribe((characters: any) => {
  //       episodio.character = characters;
  //       observer.next(episodio);
  //       observer.complete();
  //     })
  //   })))
  // }

  listarEpisodios(ids: any) : Observable<EpisodiosModel | EpisodiosModel[]>{ 
    return this._http.get<EpisodiosModel | EpisodiosModel[]>(API + `episode/${ids}`);
  }
}