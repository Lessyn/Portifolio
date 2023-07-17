import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'rm-filtro-select',
  templateUrl: './filtro-select.component.html',
  styleUrls: ['./filtro-select.component.css'],
})
export class FiltroSelectComponent implements OnInit {
  @Output() eventoEmitidoPorSelect = new EventEmitter();
  @Input() filtroItensSelect: string[];
  @Input() labelFiltroPorSelect: string;

  constructor() {}

  ngOnInit(): void {}

  eventoFiltroSelect(evento:string) {
    const dados = {
      evento
    }
    this.eventoEmitidoPorSelect.emit(dados);
   
  }
}