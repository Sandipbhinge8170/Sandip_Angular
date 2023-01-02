import { Component, OnInit } from '@angular/core';
import { AlbumsService } from '../services/albums.service';

@Component({
  selector: 'app-getalbumsapi',
  templateUrl: './getalbumsapi.component.html',
  styleUrls: ['./getalbumsapi.component.css']
})
export class GetalbumsapiComponent implements OnInit {

  constructor(private _albums:AlbumsService) { }

  ngOnInit() {

    this._albums.getalbums().subscribe(res=>{
      console.log(res);
      
    })
  }

}
