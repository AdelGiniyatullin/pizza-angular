import { Component, OnChanges } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { OrderService } from '../../modules/order.service';
import { Order } from '../../modules/order.types';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { OrderModalComponent } from './order-modal/order-modal.component';
import $ from 'jquery';

@Component({
  selector: 'app-pizza-order',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './pizza-order.component.html',
  styleUrl: './pizza-order.component.scss'
})
export class PizzaOrderComponent{
  constructor(private formBuilder: FormBuilder,
              private orderService: OrderService,
              private dialog: MatDialog
    ){}

  data: Order = {
    name: '',
    address: '',
    phone: ''
  };
  
  checkoutForm = this.formBuilder.group({
    name: ['', 
      Validators.pattern(/./),
    ],
    address: '',
    phone: '',
  });

  onSubmit(): void {
    this.data = JSON.parse(JSON.stringify(this.checkoutForm.value));
    this.orderService.putOrderData(this.data).subscribe({
      next:() => {
        const dialogConfig = new MatDialogConfig;
        dialogConfig.panelClass = ['default-modal', 'order-modal'];
        dialogConfig.width = '400px';
        dialogConfig.height = '150px';
        dialogConfig.position = {
          left: 'calc(50vw - 250px)',
          top: '-400px'
        }
        this.dialog.open(OrderModalComponent, dialogConfig)
      },
      error: error => console.log(error)
    });
    this.checkoutForm.reset();
  }
}
