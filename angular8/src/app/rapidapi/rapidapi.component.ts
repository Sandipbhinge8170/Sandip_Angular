import { Component, OnInit } from '@angular/core';
import { RapidaapiService } from '../services/rapidaapi.service';

@Component({
  selector: 'app-rapidapi',
  templateUrl: './rapidapi.component.html',
  styleUrls: ['./rapidapi.component.css']
})
export class RapidapiComponent implements OnInit {
 news:any = [];
  constructor(private _rapidapi:RapidaapiService) { }

  ngOnInit() {
    this._rapidapi.getDataFinance().subscribe(res =>{
      // console.log('rapid api data',res);
    this.news=res.quote;
      console.log('data',this.news);
      
    })
  }

}
