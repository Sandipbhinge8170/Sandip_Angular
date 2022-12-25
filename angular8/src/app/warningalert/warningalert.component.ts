import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warningalert',
  templateUrl: './warningalert.component.html',
  styleUrls: ['./warningalert.component.css']
})
export class WarningalertComponent implements OnInit {
 name="This is a warning ,you are in denger";
  constructor() { }

  ngOnInit() {
  }

}
