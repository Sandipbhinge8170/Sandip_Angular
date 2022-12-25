import { Component, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {
@Output() foodevent:EventEmitter<string>=new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }
  //function well call once user enter input text value
  addtoFood(value){
    //foodevent is nathing but our custom event
this.foodevent.emit(value);
  }

}
