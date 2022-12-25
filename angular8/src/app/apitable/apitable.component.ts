import { Component, OnInit } from '@angular/core';
import { DemoService } from '../services/demo.service';

@Component({
  selector: 'app-apitable',
  templateUrl: './apitable.component.html',
  styleUrls: ['./apitable.component.css']
})
export class ApitableComponent implements OnInit {

  userData:any=[];
constructor(private demoServive:DemoService){

}

ngOnInit(): void {
  this.demoServive.getUserData().subscribe(data =>{
   console.log('gatting data',data);
   this.userData=data;
   
  })
}

}
