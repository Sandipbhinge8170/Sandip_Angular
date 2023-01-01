import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { devAPIUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private _httpClient:HttpClient) { }
//get data form devapiurl this url is avaliable enverment.ts file
getPost():Observable<any>{
 return this._httpClient.get(`${devAPIUrl}posts`);
}
//get data by id 
getPostByid(id):Observable<any>{
 return this._httpClient.get(`${devAPIUrl}posts/` +id);
}

deletePostById(id){
return this._httpClient.delete(`${devAPIUrl}posts/` +id)
}
  
}
