import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import * as Chart from 'chart.js'

@Component({
  selector: 'app-graficas',
  templateUrl: './graficas.page.html',
  styleUrls: ['./graficas.page.scss'],
})
export class GraficasPage implements OnInit {

  
  private chart:Chart;

  constructor( private service: LoginService, public router: Router ,private ref:ChangeDetectorRef ) { 

 
  }

  activo:Number;
  pragmatico:Number;
  reflexivo:Number;
  teorico:Number;


  ngOnInit() {

    this.grafica();
    this.grafica2();
  }

  datos(){

    let a:Number;
    let b:Number;
    let c:Number;
    let d:Number;

    a = this.service.datos1();
    b = this.service.datos2();
    c = this.service.datos3();
    d = this.service.datos4();

    this.activo = a;
    this.pragmatico = b;
    this.reflexivo = c;
    this.teorico = d;

    console.log("a: "+ this.activo  +" b: "+this.pragmatico+" c: "+  this.reflexivo +" d: "+ this.teorico );

   
    
  }


  grafica(){

    let a:Number= 5 ;
    let b:Number= 10;
    let c:Number= 15;
    let d:Number= 20;

    var ctx = document.getElementById('grafica');
    this.chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['activo', 'pragmatico', 'reflexivo', 'teorico', ],
            datasets: [{
                label: '# of Votes',
                data: [a,  b , c, d],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                   
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                   
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });

  }

  grafica2(){

    var ctx = document.getElementById('grafica2');
    this.chart = new Chart(ctx,{
        type: 'radar',
        data: {
            labels:['activo', 'pragmatico', 'reflexivo', 'teorico'],
            datasets:[{
                label: 'Tipo de aprendisaje',
                data:[5,10,15,20],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                   
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                   
                ],
                borderWidth: 2

            }]
        }
    })


   

  }

}
