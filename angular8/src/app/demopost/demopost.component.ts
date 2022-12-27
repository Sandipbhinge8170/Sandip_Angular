import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post';

import { PostService } from '../services/post.service';

@Component({
  selector: 'app-demopost',
  templateUrl: './demopost.component.html',
  styleUrls: ['./demopost.component.css']
})
export class DemopostComponent implements OnInit {
arrpost:Post[]=[];
//DI postservice
  constructor(private _postservice:PostService) { }

  ngOnInit() {
    //call getpost method and subscribe it
    this._postservice.getPost().subscribe(res =>{
      console.log('jsionplaceholder',res);
      this.arrpost =res;
    })
  }

}
