import { Component, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';
import { Pizza } from '../../modules/pizza.types';
import { AsyncPipe } from '@angular/common';
import { Fancybox } from '@fancyapps/ui';

@Component({
  selector: 'app-pizza-market',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './pizza-market.component.html',
  styleUrl: './pizza-market.component.scss'
})

export class PizzaMarketComponent implements OnInit, OnDestroy{
  @Input() data!: Pizza;
  
  constructor(private elRef: ElementRef){}

  ngOnInit() {
    Fancybox.bind(this.elRef.nativeElement, '[data-fancybox]', {
    });
  }

  ngOnDestroy() {
    Fancybox.unbind(this.elRef.nativeElement);
    Fancybox.close();
  }
}
