import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CarsComponent } from 'src/app/cars/cars.component';
import { BmwComponent } from 'src/app/cars/bmw/bmw.component';
import { OudiComponent } from 'src/app/cars/oudi/oudi.component';


const cars : Routes =[
  {path:'cars',component:CarsComponent,children:[
    {path:'bmw',component:BmwComponent},
    {path:'oudi',component:OudiComponent}
  ]},
]


@NgModule({
  declarations: [
    BmwComponent,
    OudiComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(cars)
  ],
  exports :[
    RouterModule
  ]
})
export class CarsModule { }
