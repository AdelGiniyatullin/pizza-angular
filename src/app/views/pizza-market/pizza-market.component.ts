import { Component, Input } from '@angular/core';
import { Pizza } from '../../modules/pizza.types';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-pizza-market',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './pizza-market.component.html',
  styleUrl: './pizza-market.component.scss'
})

export class PizzaMarketComponent {
  @Input() data!: Pizza;
}
