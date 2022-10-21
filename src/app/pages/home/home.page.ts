import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { ComunicacionPage } from '../comunicacion/comunicacion.page';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
subjects;
  constructor(private router : Router) { }
      
  ngOnInit() {
    this.subjects = [
      
      {
        img: 'assets/imgs/matematica.png',
        name: 'Matematicas'
      },
      {
        img: 'assets/imgs/antropologia.png',
        name: 'Antropologia'
      },
      {
        img: 'assets/imgs/comunicacion.png', 
        name: 'Comunicacion',
      },
      {
        img: 'assets/imgs/estadistica.png',
        name: 'Estadistica'
      },
      {
        img: 'assets/imgs/programacion.png',
        name: 'Programacion'
      },
      {
        img: 'assets/imgs/ingles.png',
        name: 'ingles'
      },
    ];
  }

goToSubject(){

}

}
