import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public url: string;

  CounActivo:Number=0;
  CounPragmatico:Number=0;
  CounReflexivo:Number=0;
  CounTeorico:Number=0;


  constructor( public _http: HttpClient) { 

    this.url = 'http://localhost:3000/api/';
  }

  register(value : any ){
 let params = JSON.stringify(value);
 let headers = new HttpHeaders().set('Content-Type', 'application/json');
 return this._http.post(this.url+'register',params,{headers: headers});


  }

  datos1(){

    return this.CounActivo
  }

  datos2(){

    return this.CounPragmatico
  }

  datos3(){

    return this.CounReflexivo
  }

  datos4(){

    return this.CounTeorico
  }


  login(email: string, password: string){

let user = {'user_email': email ,'user_password': password,'gettoken': true}

    let params = JSON.stringify(user);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.post(this.url+'login',params,{headers: headers});
  }




  formulario(activo:Number, pragmatico:Number,reflexivo:Number, teorico:Number){

    this.CounActivo = activo;
    this.CounPragmatico = pragmatico;
    this.CounReflexivo = reflexivo;
    this.CounTeorico =teorico;




    return console.log('datos alamacenados'+ ' Activo: '+ this.CounActivo+ ' Pragmatico: '+ this.CounPragmatico + ' Reflexivo: '+ this.CounReflexivo + ' Teorico: '+ this.CounTeorico);
    

    
  }
}
