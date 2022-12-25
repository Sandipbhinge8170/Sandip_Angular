import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { employee1 } from '../models/employee1';

@Component({
  selector: 'app-templethomework',
  templateUrl: './templethomework.component.html',
  styleUrls: ['./templethomework.component.css']
})
export class TemplethomeworkComponent implements OnInit {
  defaultValue:string="Advanced";
  submitted:boolean=false;
  Employee=new employee1();

  constructor() { }

  ngOnInit() {}

  OnSubmit(form: NgForm){
    this.submitted = true;
this.Employee.email=form.value.userDetails.email;
this.Employee.password=form.value.userDetails.password;
this.Employee.Subscription=form.value.userDetails.Subscription
form.reset();
form.controls['Subscription'].setValue("Advanced");
  }

}
