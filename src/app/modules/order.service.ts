import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from './order.types';

@Injectable({ providedIn: 'root' })
export class OrderService {
    constructor(private readonly httpClient: HttpClient) {
    }
    putOrderData(order: Order){
        return this.httpClient.post("http://localhost:3002/order", order);
    }
}
