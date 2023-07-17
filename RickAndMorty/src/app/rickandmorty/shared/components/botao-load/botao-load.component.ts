import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'rm-botao-load',
  templateUrl: './botao-load.component.html',
  styleUrls: ['./botao-load.component.css'],
})
export class BotaoLoadComponent implements OnInit {
  
  @Input() ultimaPagina

  constructor() {}

  ngOnInit(): void {}
}