import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'rm-filtro-input',
  templateUrl: './filtro-input.component.html',
  styleUrls: ['./filtro-input.component.css'],
})
export class FiltroInputComponent implements OnInit {
  @Output() emitirEventoInput = new EventEmitter<any>();

  @Output() emitirEventoLimparFiltroInput = new EventEmitter<any>();  

  debounce: Subject<string> = new Subject();

  valorFiltro = '';

  constructor() {}

  ngOnInit(): void {
    this.debounce.pipe(debounceTime(300)).subscribe((filtro) => {
      this.emitirEventoInput.emit(filtro);
    });
  }
  limparFiltroInput() : void {
    this.valorFiltro = '';
    this.emitirEventoLimparFiltroInput.emit(this.valorFiltro);
  }  
}