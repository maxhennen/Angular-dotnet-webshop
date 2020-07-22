import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderOverviewComponent } from './order-overview/order-overview.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import {OrderRoutingModule} from './order-routing.module';


@NgModule({
  declarations: [OrderOverviewComponent, OrderDetailComponent],
  imports: [
    CommonModule,
    OrderRoutingModule
  ]
})
export class OrdersModule { }
