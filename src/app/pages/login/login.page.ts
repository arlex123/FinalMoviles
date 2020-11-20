import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  
  email: string;
  password: string;

  constructor( private service: LoginService, public router: Router) { }

  ngOnInit() {
  }



  login(){


    if (this.email && this.password) {

      
      
    }

    this.service.login(this.email,this.password).subscribe(
      response =>{
        if (response) {
          console.log(response);
          this.router.navigate(['/formulario']);
          
          
        }
      },
      error=>{
        console.log(<any>error);
      
      }
    );
    
  }
  

  Register(){

    this.router.navigate(['/register']);
    
  }

}
