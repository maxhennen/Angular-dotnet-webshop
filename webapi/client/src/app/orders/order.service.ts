import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { IOrder } from '../shared/models/order';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getOrdersByUser() {
    return this.http.get<IOrder[]>(this.baseUrl + 'orders');
  }

  getOrderByUserById(id: number) {
    return this.http.get<IOrder>(this.baseUrl + 'orders/' + id);
  }
}
