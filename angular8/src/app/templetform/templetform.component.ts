import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from '../models/Employee';

@Component({
  selector: 'app-templetform',
  templateUrl: './templetform.component.html',
  styleUrls: ['./templetform.component.css']
})
export class TempletformComponent implements OnInit {

  defaultGender: string = "Male";
  defaultValue: string = "Angular";
  employee = new Employee();
  submitted: boolean = false;
  gender = [
    { id: '1', value: 'Male' },

    { id: '2', value: 'Female' }

  ]
  constructor() {

  }

  ngOnInit() {
    var date = new Date();
    var tdate = date.getDate();
    var month = date.getMonth() + 1; //getMonth is return previous date so we get current date so we can write +1
    var year = date.getFullYear();
    var minDate = year + "-" + month + "-" + tdate;
    // if (tdate < 10) {
    //   tdate = 0 + tdate;
    // }

    // if (month < 10) {
    //   month = 0 + month;
    // }
    document.getElementById("date").setAttribute('min', minDate)
    console.log(minDate);


    console.log(year);

    console.log(month);

    console.log(tdate);

    console.log(date);


  }

  OnSubmit(form: NgForm) {
    this.submitted = true;
    this.employee.course = form.value.course;
    this.employee.Username = form.value.userDetails.Username;
    this.employee.email = form.value.userDetails.email;
    this.employee.address = form.value.userDetails.address;
    this.employee.gender = form.value.gender;
    form.reset();
    form.controls['course'].setValue("Angular");
    form.controls['gender'].setValue("Male");
    // this.saveEmployeeDetails(this.employee);
  }

  saveEmployeeDetails(emp: Employee) {
    console.log(emp);



  }

}
