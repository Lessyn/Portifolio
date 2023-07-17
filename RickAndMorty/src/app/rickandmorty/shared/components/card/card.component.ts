import { Component, Input } from '@angular/core';

@Component({
  selector: 'rm-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  
  @Input() image = '';
  @Input() name = '';
  @Input() species = '';
  @Input() gender = '';
  @Input() status = '';
  @Input() id = '';
  @Input() url = '';

  constructor() {}
}