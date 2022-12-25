import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipedemo',
  templateUrl: './pipedemo.component.html',
  styleUrls: ['./pipedemo.component.css']
})
export class PipedemoComponent implements OnInit {
name="sandip";
todayDate : Date = new Date();

emp={
  name:"sandip",
  id:1
}
  constructor() { }

  ngOnInit() {
  }

}
