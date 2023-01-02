import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
url='https://jsonplaceholder.typicode.com/albums';
  constructor(private http:HttpClient) { }

  getalbums(){
    return this.http.get(this.url)
  }
  
}
