import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firebasepost } from '../models/firebasepost';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
url='https://angualrcrud-316cb-default-rtdb.firebaseio.com/';

//users array practic form rxjs library
users:any[]=[
  {id:'101',name:'sandip'},
  {id :'102',name:'sagar'}
]

userss:any[]=[
  {id:'101',name:'sandip',gender:'Male'},
  {id :'102',name:'sagar',gender:'Male'},
  {id :'102',name:'neha',gender:'female'},
  {id :'102',name:'priys',gender:'female'}
]


  constructor(private http:HttpClient) { }

  createPost(){
    let postData={
      title:'This is angular crud',
      content:'This is firebase curd operation'
    }
   return this.http.post(this.url +'post.json',postData )
  }

  createPostDataReactiveForm(Firebasepost:firebasepost ){
    return this.http.post(this.url +'post.json',Firebasepost);
  }

  getPostDataFirebase(){
   return this.http.get(this.url+ 'post.json');
  }
}
