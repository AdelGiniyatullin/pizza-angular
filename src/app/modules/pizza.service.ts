import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pizza } from './pizza.types';

@Injectable({ providedIn: 'root' })
export class PizzaService {
    constructor(private readonly httpClient: HttpClient) {
    }
    getPizzaData(): Observable<Pizza[]>{
        return this.httpClient.get<Pizza[]>("http://localhost:3000/pizza");
    }
}
