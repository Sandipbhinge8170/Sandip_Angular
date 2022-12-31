import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-rlogin',
  templateUrl: './rlogin.component.html',
  styleUrls: ['./rlogin.component.css']
})
export class RloginComponent implements OnInit {
  

  constructor(private _rout:Router,private _authService:AuthService) { }

  ngOnInit() {
  }

  checkUser(uname,password){
  var output=this._authService.checkUserNamePassword(uname,password);
  if(output==true){
    window.alert('login succesfully');
    this._rout.navigate(['rproducts'])
  }else{
    window.alert('invalied username and password')
  }
}
  
  
}
