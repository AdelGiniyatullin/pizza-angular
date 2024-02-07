import { Component } from '@angular/core';
import { CommonModule, NgClass, NgStyle } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
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
  constructor(private formBuilder: FormBuilder,
              private orderService: OrderService,
              private dialog: MatDialog
    ){
      this.isVisibleName = true;
      this.isVisibleAddress = true;
      this.isVisiblePhone = true;
    }

  isVisibleName: Boolean | undefined;
  isVisibleAddress: Boolean | undefined;
  isVisiblePhone: Boolean | undefined;

  data: Order = {
    name: '',
    address: '',
    phone: ''
  };
  
  checkoutForm: FormGroup = this.formBuilder.group({
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

  onChangeName(){
    if((this.checkoutForm.controls['name'].valid === false) && (this.checkoutForm.controls['name'].dirty === false)){
      this.isVisibleName = true;
    }
    else if((this.checkoutForm.controls['name'].valid === true) && (this.checkoutForm.controls['name'].dirty === true)){
      this.isVisibleName = true;
    }
    else {
      this.isVisibleName = false;
    }
  }
  onChangeAddress(){
    if((this.checkoutForm.controls['address'].valid === false) && (this.checkoutForm.controls['address'].dirty === false)){
      this.isVisibleAddress = true;
    }
    else if((this.checkoutForm.controls['address'].valid === true) && (this.checkoutForm.controls['address'].dirty === true)){
      this.isVisibleAddress = true;
    }
    else {
      this.isVisibleAddress = false;
    }
  }
  onChangePhone(){
    if((this.checkoutForm.controls['phone'].valid === false) && (this.checkoutForm.controls['phone'].dirty === false)){
      this.isVisiblePhone = true;
    }
    else if((this.checkoutForm.controls['phone'].valid === true) && (this.checkoutForm.controls['phone'].dirty === true)){
      this.isVisiblePhone = true;
    }
    else {
      this.isVisiblePhone = false;
    }
  }
  
  onSubmit(): void {
    
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
