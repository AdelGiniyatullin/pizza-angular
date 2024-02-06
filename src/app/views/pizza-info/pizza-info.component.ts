import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MockData, data } from './mockData';

@Component({
  selector: 'app-pizza-info',
  standalone: true,
  imports: [NgIf,NgFor,AsyncPipe],
  templateUrl: './pizza-info.component.html',
  styleUrl: './pizza-info.component.scss'
})
export class PizzaInfoComponent {
  data$: Observable <MockData[]> = of(data);
}
