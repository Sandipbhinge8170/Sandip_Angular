import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-rlogin',
  templateUrl: './rlogin.component.html',
  styleUrls: ['./rlogin.component.css']
})
export class RloginComponent implements OnInit {
  

  constructor(private _rout:Router) { }

  ngOnInit() {
  }

  checkUser(uname,pwd){
if(uname== 'admin' && pwd== 'admin'){

this._rout.navigate(['rproducts/laptop'])

}
else
{
  alert('Hello Enter Correct Email And Password');
}
  }
  
}
