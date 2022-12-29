import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderlistComponent } from './orderlist/orderlist.component';
import { OrdersRoutingModule } from './orders/orders-routing.module';



@NgModule({
  declarations: [OrderlistComponent],
  imports: [
    CommonModule,
    //path for orderroutingmodule
    OrdersRoutingModule
  ]
})
export class OrdersModule {
  constructor(){
    console.log("ordermodule load");
    
  }
 }
