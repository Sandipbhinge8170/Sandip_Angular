import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';


import { DemopostComponent } from './demopost/demopost.component';

import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PostdetailsComponent } from './postdetails/postdetails.component';
import { RaboutusComponent } from './raboutus/raboutus.component';
import { RcontactusComponent } from './rcontactus/rcontactus.component';
import { RhomeComponent } from './rhome/rhome.component';
import { RloginComponent } from './rlogin/rlogin.component';


const routes: Routes = [
  {path:'',redirectTo: 'rlogin',pathMatch:'full'},   //localhost:4200
  {path:'rlogin',component:RloginComponent},
  
  {path:'rhome', component:RhomeComponent},
  {path:'raboutus', component:RaboutusComponent},
  {path:'rcontactus', component:RcontactusComponent},
  //nested  <router-outlet></router-outlet>
  
  {path:'post', component:DemopostComponent},

  //route parametar find by id
  {path:'postdetails/:id', component:PostdetailsComponent},

//lazy loading syntax
//folder-name->loadchildern->folder-name->module-name#module class name

{path:'rproducts',canActivate:[AuthGuard],  loadChildren:'./rproducts/products.module#ProductsModule'},
{path:'cars',loadChildren:'./cars/cars.module#CarsModule'},
{path:'orders',loadChildren:'./orders/orders.module#OrdersModule'},

  //when user enter wrong address then it path ** found
  {path:'**',component:PagenotfoundComponent}
];




// const routes: Routes = [
//   {path:'',redirectTo: 'rlogin',pathMatch:'full'},   //localhost:4200
//   {path:'rlogin',component:RloginComponent},
  
//   {path:'rhome', component:RhomeComponent},
//   {path:'raboutus', component:RaboutusComponent},
//   {path:'rcontactus', component:RcontactusComponent},
//nested child router using childern array
//   {path:'rproducts',children:[
//     {path:'', component:RproductsComponent},
//     {path:'laptop',component:LaptopComponent},
//     {path:'tablet',component:TabletComponent},
//     {path:'tv',component:TvComponent},
//     {path:'washingmachin',component:WashingmachinComponent}
//   ]},
//   {path:'**',component:PagenotfoundComponent}
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(){
    console.log("approuting module load");
    
  }
 }
