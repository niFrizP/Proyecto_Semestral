import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-generarcodigo',
  templateUrl: './generarcodigo.page.html',
  styleUrls: ['./generarcodigo.page.scss'],
})
export class GenerarcodigoPage implements OnInit {

  constructor(    
    private router:Router,
    private menu:MenuController,
    ) { }

  ngOnInit() {
  }
  
  verMenu(){
    this.menu.open('first');
  }
}
