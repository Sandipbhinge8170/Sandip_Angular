import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RaboutusComponent } from './raboutus/raboutus.component';
import { RcontactusComponent } from './rcontactus/rcontactus.component';
import { RhomeComponent } from './rhome/rhome.component';
import { RloginComponent } from './rlogin/rlogin.component';
import { RproductsComponent } from './rproducts/rproducts.component';


const routes: Routes = [
  {path:'',redirectTo: 'rlogin',pathMatch:'full'},   //localhost:4200
  {path:'rlogin',component:RloginComponent},
  
  {path:'rhome', component:RhomeComponent},
  {path:'raboutus', component:RaboutusComponent},
  {path:'rcontactus', component:RcontactusComponent},
  {path:'rproducts', component:RproductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
