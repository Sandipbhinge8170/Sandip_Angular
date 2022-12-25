import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute',
  templateUrl: './attribute.component.html',
  styleUrls: ['./attribute.component.css']
})
export class AttributeComponent implements OnInit {
  colorval = 'red';
  people: any[] = [
    {
      "name": "sachin",
      "country": "india"
    },

    {
      "name": "pradip",
      "country": "UK"
    },
    {
      "name": "amit",
      "country": "UK"
    },
    {
      "name": "kiran",
      "country": "pak"
    },
    {
      "name": "patil",
      "country": "usa"
    },
    {
      "name": "sandy",
      "country": "UK"
    },

  ]
  constructor() { }

  ngOnInit() {
  }

}
