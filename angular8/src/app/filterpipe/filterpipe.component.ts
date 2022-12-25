import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filterpipe',
  templateUrl: './filterpipe.component.html',
  styleUrls: ['./filterpipe.component.css']
})
export class FilterpipeComponent implements OnInit {
  nameserch:string='';
  productarr:any[]=[{
    Srno:1,
    name:'mobile',
    price:'20000',
    availibility:'Available'
  },
  {
    Srno:2,
    name:'Tv',
    price:'20000',
    availibility:'Available'
  },
  {
    Srno:3,
    name:'washing machin',
    price:'50000',
    availibility:'Available'
  },
  {
    Srno:4,
    name:'friz',
    price:'40000',
    availibility:'Available'
  }

]
  constructor() { }

  ngOnInit() {
  }

}
