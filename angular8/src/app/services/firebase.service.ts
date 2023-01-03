import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firebasepost } from '../models/firebasepost';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
url='https://angualrcrud-316cb-default-rtdb.firebaseio.com/';
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
