import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../models/post';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-postdetails',
  templateUrl: './postdetails.component.html',
  styleUrls: ['./postdetails.component.css']
})
export class PostdetailsComponent implements OnInit {
Id:any[]=[];
  constructor(private _postService:PostService, private route:ActivatedRoute) { }

  ngOnInit() {
    let id=this.route.snapshot.params['id'];
this._postService.getPostByid(id).subscribe(res=>{
  console.log(res);
  this.Id=res;
  })
  }

  displayStyle = "none"; 
 
  openPopup() { 

    this.displayStyle = "block"; 

  } 

  closePopup() { 

    this.displayStyle = "none"; 

  } 

}
