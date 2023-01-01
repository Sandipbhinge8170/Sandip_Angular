import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RapidaapiService {
  //                                                                query=apple is parameter
  url='https://bb-finance.p.rapidapi.com/market/auto-complete?query=apple';
  constructor(private _http:HttpClient) { }

  getDataFinance(){
//hraders is a object bcoz url is authentication
    let headers = new HttpHeaders({
      'X-RapidAPI-Host': 'bb-finance.p.rapidapi.com',
      'X-RapidAPI-Key': '2981d15e36mshea3b34d068668b8p11e979jsn56adc2da0419'
    })
return this._http.get(this.url,{headers:headers});
  }
}
