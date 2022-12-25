import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.css']
})
export class HooksComponent implements OnInit, OnChanges{
@Input() userId:number;
  constructor() { console.log("constructor calling");
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
    console.log("ngOnInit calling");
  }
}

