import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RaboutusComponent } from './raboutus/raboutus.component';
import { RcontactusComponent } from './rcontactus/rcontactus.component';
import { RhomeComponent } from './rhome/rhome.component';
import { RloginComponent } from './rlogin/rlogin.component';
import { LaptopComponent } from './rproducts/laptop/laptop.component';
import { RproductsComponent } from './rproducts/rproducts.component';
import { TabletComponent } from './rproducts/tablet/tablet.component';
import { TvComponent } from './rproducts/tv/tv.component';
import { WashingmachinComponent } from './rproducts/washingmachin/washingmachin.component';

const routes: Routes = [
  {path:'',redirectTo: 'rlogin',pathMatch:'full'},   //localhost:4200
  {path:'rlogin',component:RloginComponent},
  
  {path:'rhome', component:RhomeComponent},
  {path:'raboutus', component:RaboutusComponent},
  {path:'rcontactus', component:RcontactusComponent},
  //nested  <router-outlet></router-outlet>
  {path:'rproducts', component: RproductsComponent, children:[
    {path:'laptop',component:LaptopComponent},
    {path:'tablet',component:TabletComponent},
    {path:'tv',component:TvComponent},
    {path:'washingmachin',component:WashingmachinComponent}
  ]},
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
export class AppRoutingModule { }
