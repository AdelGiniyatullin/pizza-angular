import { Component } from '@angular/core';
import { CommonModule, NgClass, NgStyle } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { OrderService } from '../../modules/order.service';
import { Order } from '../../modules/order.types';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { OrderModalComponent } from './order-modal/order-modal.component';

@Component({
  selector: 'app-pizza-order',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NgStyle, NgClass],
  templateUrl: './pizza-order.component.html',
  styleUrl: './pizza-order.component.scss'
})
export class PizzaOrderComponent{
[x: string]: any;
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
    [Validators.required, Validators.pattern(/^[a-zA-Zа-яёА-ЯЁ ]+$/)],
    ],
    address: ['', 
    Validators.required,
  ],
    phone:['', 
    [Validators.required, Validators.pattern(/^[0-9+)(-)]/)],
  ],
  });

  onSubmit(): void {
    this.data = JSON.parse(JSON.stringify(this.checkoutForm.value));
    console.log(this.checkoutForm.controls.name.invalid || this.checkoutForm.controls.name.dirty);
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
