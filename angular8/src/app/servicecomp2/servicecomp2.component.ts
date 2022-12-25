import { Component, OnInit } from '@angular/core';
import { DemoService } from '../services/demo.service';

@Component({
  selector: 'app-servicecomp2',
  templateUrl: './servicecomp2.component.html',
  styleUrls: ['./servicecomp2.component.css']
})
export class Servicecomp2Component implements OnInit {
productss={};
  constructor(private demoService:DemoService){ }

  ngOnInit() {
this.productss=this.demoService.products;
  }

//   onSubmit(){
// this.demoService.display();
//   }

}
