import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-reactiveformhw2',
  templateUrl: './reactiveformhw2.component.html',
  styleUrls: ['./reactiveformhw2.component.css']
})
export class Reactiveformhw2Component implements OnInit {

  name = 'Angular';
  maxDate = new Date();
  bsConfig = {showWeekNumbers: false, dateInputFormat: 'DD-MMM-YYYY'};
  registerForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.createRegisterForm();
  }
  createRegisterForm() {
    this.registerForm = this.fb.group({
      name: ['', Validators.compose([Validators.required])],
      emailId: ['', Validators.compose([Validators.required,
      Validators.pattern('^[A-Za-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')])],
      mobile: ['', Validators.compose([Validators.required, Validators.maxLength(10), Validators.pattern('^[0-9]+$')])],
      // dob: ['', Validators.compose([Validators.required])]
    });
  }
  // get f() { return this.registerForm.controls; }
  // registerFormSubmit(value) {
  //   console.log((value.dob).format('DD-MMM-YYYY'));
  // }
}
