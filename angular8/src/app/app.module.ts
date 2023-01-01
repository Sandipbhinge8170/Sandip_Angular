import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import{HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { WarningalertComponent } from './warningalert/warningalert.component';
import { SuccessalertComponent } from './successalert/successalert.component';
import { AssdatabindingComponent } from './assdatabinding/assdatabinding.component';
import { DemodirectiveComponent } from './demodirective/demodirective.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { AttributeComponent } from './attribute/attribute.component';

import { TemprefvariableComponent } from './temprefvariable/temprefvariable.component';
import { ChildComponent } from './child/child.component';
import { Child1Component } from './child1/child1.component';
import { OutputComponent } from './output/output.component';
import { ChildtoParrentComponent } from './childto-parrent/childto-parrent.component';
import { HooksComponent } from './hooks/hooks.component';
import { SimpletempformComponent } from './simpletempform/simpletempform.component';
import { TempletformComponent } from './templetform/templetform.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { TemplethomeworkComponent } from './templethomework/templethomework.component';
import { ReactivehomeworkComponent } from './reactivehomework/reactivehomework.component';
import { Reactiveformhw2Component } from './reactiveformhw2/reactiveformhw2.component';
import { RectiveformassignmentComponent } from './rectiveformassignment/rectiveformassignment.component';
import { Servicecomp1Component } from './servicecomp1/servicecomp1.component';
import { Servicecomp2Component } from './servicecomp2/servicecomp2.component';
import { ApitableComponent } from './apitable/apitable.component';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
import { Component3Component } from './component3/component3.component';
import { PipedemoComponent } from './pipedemo/pipedemo.component';
import { FilterpipeComponent } from './filterpipe/filterpipe.component';
import { FilterPipe } from './filterpipe/pipe/filter.pipe';
import { RaboutusComponent } from './raboutus/raboutus.component';
import { RcontactusComponent } from './rcontactus/rcontactus.component';

import { RhomeComponent } from './rhome/rhome.component';
import { RloginComponent } from './rlogin/rlogin.component';
import { DemoComponent } from './demo/demo.component';
import { LoginComponent } from './login/login.component';
import { Login1Component } from './login1/login1.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

import { DemopostComponent } from './demopost/demopost.component';
import { PostdetailsComponent } from './postdetails/postdetails.component';
import { AddUserComponent } from './add-user/add-user.component';
import { RapidapiComponent } from './rapidapi/rapidapi.component';

//import { CarsComponent } from './cars/cars.component';
//import { CarsModule } from './cars/cars.module';

@NgModule({
  declarations: [
    AppComponent,
    WarningalertComponent,
    SuccessalertComponent,
    AssdatabindingComponent,
    DemodirectiveComponent,
    NgswitchComponent,
    AttributeComponent,
   
    TemprefvariableComponent,
    ChildComponent,
    Child1Component,
    OutputComponent,
    ChildtoParrentComponent,
    HooksComponent,
    SimpletempformComponent,
    TempletformComponent,
    ReactiveformComponent,
    TemplethomeworkComponent,
    ReactivehomeworkComponent,
    Reactiveformhw2Component,
    RectiveformassignmentComponent,
    Servicecomp1Component,
    Servicecomp2Component,
    ApitableComponent,
    Component1Component,
    Component2Component,
    Component3Component,
    PipedemoComponent,
    FilterpipeComponent,
    FilterPipe,
    RaboutusComponent,
    RcontactusComponent,
 
    RhomeComponent,
    RloginComponent,
    DemoComponent,
    LoginComponent,
    Login1Component,
    PagenotfoundComponent,
    
    DemopostComponent,
    PostdetailsComponent,
    AddUserComponent,
    RapidapiComponent,
    //CarsComponent
   
  ],
  imports: [
    BrowserModule,
   AppRoutingModule,
    FormsModule,
    //CarsModule,
    ReactiveFormsModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){
    console.log("app module loadied");
    
  }
  
 }
