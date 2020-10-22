import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public url: string;


  constructor( public _http: HttpClient) { 

    this.url = 'http://localhost:3000/api/';
  }

  register(value : any ){
 let params = JSON.stringify(value);
 let headers = new HttpHeaders().set('Content-Type', 'application/json');

 return this._http.post(this.url+'register',params,{headers: headers});


  }
}
