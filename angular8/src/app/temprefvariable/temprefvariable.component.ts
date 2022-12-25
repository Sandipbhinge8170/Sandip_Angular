import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-temprefvariable',
  templateUrl: './temprefvariable.component.html',
  styleUrls: ['./temprefvariable.component.css']
})
export class TemprefvariableComponent implements OnInit {
uname;
  constructor() { }
@Input() myinput:string;
  ngOnInit() {
  }
  show(value){
this.uname=value;
  }

}
