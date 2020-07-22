import { Component, OnInit } from '@angular/core';
import { IOrder } from 'src/app/shared/models/order';
import { OrderService } from '../order.service';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from 'xng-breadcrumb';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent implements OnInit {
  order: IOrder;
  constructor(private orderService: OrderService, private activatedRoute: ActivatedRoute, private bcService: BreadcrumbService) {
    bcService.set('@orderDetails', '');
   }

  ngOnInit(): void {
    this.loadOrder();
  }

  loadOrder() {
    this.orderService
      .getOrderByUserById(+this.activatedRoute.snapshot.paramMap.get('id'))
      .subscribe(
        (order) => {
          this.order = order;
          this.bcService.set('@orderDetails', 'Order #' + order.id + ' - ' + order.status);
        },
        (error) => {
          console.log(error);
        }
      );
  }

}
