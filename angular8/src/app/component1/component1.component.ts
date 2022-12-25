import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../services/utility.service';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {
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

let emp={
  name:"sandip",
  id:101
}
this._utilityService.userName.next(JSON.stringify(emp));
  }

}
