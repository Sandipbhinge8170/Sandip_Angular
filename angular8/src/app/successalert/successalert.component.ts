import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-successalert',
  templateUrl: './successalert.component.html',
  styleUrls: ['./successalert.component.css']
})
export class SuccessalertComponent implements OnInit {
  name="You are so successfull"
Id:number=20;
status:string="offline"
allow=false;
imgurl='https://picsum.photos/200/300';
server:string="hello"
serverName:string="sachin"

  constructor() {
    setTimeout(()=>{
      this.allow=true
    },3000);
   }

  ngOnInit() {
  }

  getStatus(){
return this.status;
  }
  onclick(){
    this.server='helloall'
  }

}
