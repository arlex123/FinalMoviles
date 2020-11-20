import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})
export class FormularioPage implements OnInit {

  activo: Array<any>[] = [];
  pragmatico: Array<any>[] = [];
  reflexivo: Array<any>[] = [];
  teorico: Array<any>[] = [];

  CounActivo:Number=0;
  CounPragmatico:Number=0;
  CounReflexivo:Number=0;
  CounTeorico:Number=0;


  constructor(private service: LoginService, public router: Router) { }



  Sum(){

    this.CounActivo = this.activo.length;
    this.CounPragmatico = this.pragmatico.length;
    this.CounReflexivo = this.reflexivo.length;
    this.CounTeorico = this.teorico.length;


    this.service.formulario(this.CounActivo,this.CounPragmatico,this.CounReflexivo,this.CounTeorico);

    this.router.navigate(['/graficas']);

  

  }

  activoRes(event: any) {


    if (event.detail.value == 'Si') {

      this.activo.push(event.detail.value);
      console.log(this.activo);

      console.log(this.activo.length);
      return;

    }

  }


  pragmaticoRes(event: any) {


    if (event.detail.value == 'Si') {

      this.pragmatico.push(event.detail.value);
      console.log(this.pragmatico);
      return;

    }

  }


  ReflexivoRes(event: any) {


    if (event.detail.value == 'Si') {

      this.activo.push(event.detail.value);
      console.log(this.activo);
      return;

    }

  }


  TeoricoRes(event: any) {


    if (event.detail.value == 'Si') {

      this.teorico.push(event.detail.value);
      console.log(this.teorico);
      return;

    }

  }






  ngOnInit() {
  }

}
