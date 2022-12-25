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
import { CustomdirDirective } from './customdir.directive';
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
import { RproductsComponent } from './rproducts/rproducts.component';
import { RhomeComponent } from './rhome/rhome.component';
import { RloginComponent } from './rlogin/rlogin.component';
import { DemoComponent } from './demo/demo.component';





@NgModule({
  declarations: [
    AppComponent,
    WarningalertComponent,
    SuccessalertComponent,
    AssdatabindingComponent,
    DemodirectiveComponent,
    NgswitchComponent,
    AttributeComponent,
    CustomdirDirective,
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
    RproductsComponent,
    RhomeComponent,
    RloginComponent,
    DemoComponent,

   

   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }