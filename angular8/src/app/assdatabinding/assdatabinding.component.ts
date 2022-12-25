import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-assdatabinding',
  templateUrl: './assdatabinding.component.html',
  styleUrls: ['./assdatabinding.component.css']
})
export class AssdatabindingComponent implements OnInit {
username:string="solapur";
password:string="sandy";
  constructor() { }

  ngOnInit() {
  }
  onclick(){
    this.username='';
    this.password='';
  }

}
