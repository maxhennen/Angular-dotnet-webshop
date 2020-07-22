import { Component, OnInit } from '@angular/core';
import {OrderService} from '../order.service';
import { IOrder } from 'src/app/shared/models/order';

@Component({
  selector: 'app-order-overview',
  templateUrl: './order-overview.component.html',
  styleUrls: ['./order-overview.component.scss']
})
export class OrderOverviewComponent implements OnInit {
  orders: IOrder[];

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.orderService.getOrdersByUser().subscribe(
      (o: IOrder[]) => {
        this.orders = o;
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
