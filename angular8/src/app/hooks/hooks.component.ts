import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.css']
})
export class HooksComponent implements OnInit, OnChanges,OnDestroy{
@Input() userId:number;

//ngOnDistroy
counter;
num:number =1;

  constructor() { console.log("constructor calling");}
  


  ngOnDestroy(): void {
// console.log("ngOnDestroy");
//ngOnDestroy
// clearInterval(this.counter);
  }


  ngOnChanges(changes: SimpleChanges): void {
    // throw new Error('Method not implemented.');
    console.log("calling ngOnChanges");
    for (const propname in changes) {
      const prop=changes[propname];

      const {previousValue, currentValue, firstChange}=prop;
        console.log(`prop name ${propname}`);
        console.log(`prev value ${previousValue}`);
        console.log(`Current value ${currentValue}`);
        console.log(`First change ${firstChange}`);
        
      }
    }
    
  

  ngOnInit() {
  //   console.log("ngOnInit calling");
  //   //ngOnDistroy
  //   this.counter = setInterval(()=>{
  //     this.num = this.num+1 ;
  //     console.log(this.num);
      
  //   },1000)
  }
}

