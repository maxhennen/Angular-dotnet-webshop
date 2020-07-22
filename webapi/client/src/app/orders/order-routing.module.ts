import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderOverviewComponent } from './order-overview/order-overview.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component: OrderOverviewComponent},
  {path: ':id', component: OrderDetailComponent, data: {breadcrumb: {alias: 'orderDetails'}}}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class OrderRoutingModule { }
