import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../services/utility.service';

@Component({
  selector: 'app-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.css']
})
export class Component3Component implements OnInit {
  userName;
  constructor(private _utilityService:UtilityService) { 
    
    this._utilityService.userName.subscribe(res=>{
      this.userName=res;
    })
  }


  ngOnInit() {
  }

  updateUser(user){
    console.log(user.value);
    this._utilityService.userName.next(user.value);
      }

}
