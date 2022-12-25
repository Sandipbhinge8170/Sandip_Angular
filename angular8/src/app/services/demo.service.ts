import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoService {
  apiURL='https://jsonplaceholder.typicode.com/users';
  products=[
    {
      name:"laptop",id:101
    },
    {
      name:"mobile",id:102
    },
    {
      name:"Tv",id:103
    },
    {
      name:"Tab",id:104
    }
  ]
  

  constructor(private http:HttpClient) { }

  // display(){
  //   alert("hello good morning")
  // }

  //this method return all data 
  getUserData(){
   return this.http.get(this.apiURL);
  }
}
