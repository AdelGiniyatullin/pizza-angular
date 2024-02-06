import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-order-modal',
  standalone: true,
  imports: [],
  templateUrl: './order-modal.component.html',
  styleUrl: './order-modal.component.scss'
})
export class OrderModalComponent {
  constructor(private readonly matDialogRef: MatDialogRef<unknown>){}
  close() {
    this.matDialogRef.close();
  }
}
