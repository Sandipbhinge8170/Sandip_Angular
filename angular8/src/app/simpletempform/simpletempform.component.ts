import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-simpletempform',
  templateUrl: './simpletempform.component.html',
  styleUrls: ['./simpletempform.component.css']
})
export class SimpletempformComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  OnSubmit(form:NgForm){
console.log(form.value);

  }

}
