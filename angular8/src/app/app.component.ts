import { Component, OnInit} from '@angular/core';
import { PostService } from './services/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {

  constructor(private _postService:PostService){

  }
  ngOnInit(): void {

  }

  DeletePost(){
    this._postService.deletePostById(1).subscribe(res =>{
      console.log(res);
      
    })
  }

  

//ngOnDistroy
appchildExits:boolean=true;
destroy(){
  this.appchildExits=false;
}


  public uid:number;

  title = 'angularapp';
  uname="sandy";

  // pass data for parant to child comp
  employee = {
    id: 1,
    name: 'chintan',
    address: 'junagadh',
  };

  //passing array data from parant to child1 comp
  userDetails = [
    {
        name: 'John Doe',
        title: 'CEO & Founder',
        company: 'Harvard University, example',
        
    },
    {
        name: 'Steve Smith',
        title: 'CEO & Founder',
        company: 'Standford University, example',
        
    },
    {
        name: 'David Warner',
        title: 'CEO & Founder',
        company: 'Sydney University, example',
       
    
    }
  ]
foods:string[]=[];
  getDataFromChild(value){
    this.foods.push(value)

  }

  favBooks = [
    { title: 'Principles' },
    { title: 'The Story of Success' },
    { title: 'Extreme Economies' },
  ];

  onBookAdded(eventData: { title: string }) {
    this.favBooks = this.favBooks.concat({
      title: eventData.title,
    });

    

}
}
