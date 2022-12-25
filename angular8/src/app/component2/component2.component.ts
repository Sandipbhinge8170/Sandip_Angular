import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../services/utility.service';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {
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
      name:"sasandy",
      id:101
    }
    this._utilityService.userName.next(JSON.stringify(emp));
      }

}
