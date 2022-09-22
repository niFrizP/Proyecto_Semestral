import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.page.html',
  styleUrls: ['./listado.page.scss'],
})
export class ListadoPage implements OnInit {
  coleccion: any=[];

  constructor(    
    private router:Router,
    private menu:MenuController,
    ) { }

  ngOnInit() {
  }

  verMenu(){
    this.menu.open('first');
  }

  doRefresh(evento){
    console.log("Refrescando la página");
    console.log(evento);

    setTimeout(() => {
      evento.target.complete();},2000);
  }

}
