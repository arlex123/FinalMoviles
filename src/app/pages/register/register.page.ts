import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder , Validators} from '@angular/forms';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  providers:[LoginService],
})
export class RegisterPage implements OnInit {


  get name() {
    return this.registration.get('user_name')
  }

  get typeId() {
    return this.registration.get('user_type_id')
  }

  get numId() {
    return this.registration.get('user_num_id')
  }

  get city() {
    return this.registration.get('user_city')
  }

  get department() {
    return this.registration.get('user_department')
  }

  get addres() {
    return this.registration.get('user_addres')
  }

  get gender() {
    return this.registration.get('user_gender')
  }

  get email() {
    return this.registration.get('user_email')
  }

  get password() {
    return this.registration.get('user_password')
  }

  get rol() {
    return this.registration.get('user_role')
  }

  public errors = {
    name:[
      {type:'required', message:'Nombre es requerido'},
      {type:'maxlength', message:'numero maximo de carateres es 100'}
    ],
    typeId:[
      {type:'required', message:'identicacion es requerido'},
      {type:'maxlength', message:'numero maximo de carateres es 100'}
    ],
    numId:[
      {type:'required', message:'el numero de la identificacion es requerido'},
      {type:'maxlength', message:'numero maximo de carateres es 100'}
    ],
    city:[
      {type:'required', message:'la cuidad es requerido'},
      {type:'maxlength', message:'numero maximo de carateres es 100'}
    ],
    department:[
      {type:'required', message:'el departemento es requerido'},
      {type:'maxlength', message:'numero maximo de carateres es 100'}
    ],
    addres:[
      {type:'required', message:'la deireccion es requerido'},
      {type:'maxlength', message:'numero maximo de carateres es 100'}
    ],
    gender:[
      {type:'required', message:'el genero es requerido'},
      {type:'maxlength', message:'numero maximo de carateres es 100'}
    ],
    email:[
      {type:'required', message:'el correo es requerido'},
      {type:'patter', message:'numero maximo de carateres es 100'}
    ],
    password:[
      {type:'required', message:'la contraseña es requerido'},
      {type:'maxlength', message:'numero maximo de carateres es 100'}
    ],
    rol:[
      {type:'required', message:'el rol es requerido'},
      {type:'maxlength', message:'numero maximo de carateres es 100'}
    ]
  }


  registration = this.formBuilder.group({
    user_name: ['' ,[Validators.required , Validators.maxLength(100)]],
    user_type_id: ['' ,[Validators.required , Validators.maxLength(100)]],
    user_num_id : ['' ,[Validators.required , Validators.maxLength(100)]],
    user_city:['' ,[Validators.required , Validators.maxLength(100)]],
    user_department:['' ,[Validators.required , Validators.maxLength(100)]],
    user_addres:['' ,[Validators.required , Validators.maxLength(100)]],
    user_gender:['' ,[Validators.required , Validators.maxLength(100)]],
    user_email:['' ,[Validators.required , Validators.maxLength(100)]],
    user_password:['',[Validators.required , Validators.maxLength(100)]],
    user_role:['' ,[Validators.required , Validators.maxLength(100)]],



  })

  constructor(private router : Router , private formBuilder : FormBuilder, private service: LoginService) { }

  ngOnInit() {
  }

  register(){

    this.service.register(this.registration.value).subscribe(
      response =>{
        if (response) {
          console.log(response);
          
          
        }
      },
      error=>{
        console.log(<any>error);
        
      }
    );
    
  }

  regresar (){

    this.router.navigate(['/']);
  }

}
