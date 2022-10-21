import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  usuario={
    username:'',
    password:''
  }

  token = localStorage.getItem("token");


  constructor(
    private router:Router,
    private alertController:AlertController,
    ){ }

  ngOnInit() {
    console.log("token: ", this.token)
    this.router.navigate(["/home"]);
    
  }


  onSubmit(){
    console.log('xd');
  }

  Login(){
    localStorage.setItem('token',this.token)
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Acceso Denegado',
      subHeader: '',
      message: 'Usuario o Contraseña incorrectos',
      buttons: [
        {
          text: 'Intentar Nuevamente',
          role: 'confirm',
          handler: () => {
            console.log('Confirmado');
          },
        },
      ],
      mode:'ios',
      backdropDismiss:false,
      cssClass:'miclase',
    });
    
    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log(`Dismissed with role: ${role}`);
  }
}
