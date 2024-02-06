import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./views/header/header.component";
import { PizzaInfoComponent } from './views/pizza-info/pizza-info.component';
import { PizzaService } from './modules/pizza.service';
import { Observable } from 'rxjs';
import { Pizza } from './modules/pizza.types';
import { PizzaMarketComponent } from './views/pizza-market/pizza-market.component';
import { HttpClient } from '@angular/common/http';
import { PizzaOrderComponent } from './views/pizza-order/pizza-order.component';

@Component({
    selector: 'app-root',
    providers:[PizzaService, HttpClient],
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, HeaderComponent, PizzaInfoComponent, PizzaMarketComponent, PizzaOrderComponent]
})
export class AppComponent {
  constructor(private pizza: PizzaService){
    console.log(this.pizza$);
  }
  pizza$: Observable<Pizza[]> = this.pizza.getPizzaData();
}
