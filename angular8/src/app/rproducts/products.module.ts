import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaptopComponent } from './laptop/laptop.component';
import { TabletComponent } from './tablet/tablet.component';
import { TvComponent } from './tv/tv.component';
import { WashingmachinComponent } from './washingmachin/washingmachin.component';
import { RouterModule, Routes } from '@angular/router';
import { RproductsComponent } from './rproducts.component';
import { UtilityModule } from '../models/sharedModule/utility.module';

const proudRoutes : Routes = [
  {path:'rproducts', component: RproductsComponent, children:[
    {path:'laptop',component:LaptopComponent},
    {path:'tablet',component:TabletComponent},
    {path:'tv',component:TvComponent},
    {path:'washingmachin',component:WashingmachinComponent}
  ]},
]

@NgModule({
  declarations: [
    LaptopComponent,
    TabletComponent,
    TvComponent,
    WashingmachinComponent,
    RproductsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(proudRoutes),
    UtilityModule
  ],
  exports :[
    RouterModule
  ]
})
export class ProductsModule { }
