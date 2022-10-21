import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Usuario } from 'src/app/interfaces/usuario';
import { Storage } from '@ionic/storage-angular';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  registrado:Usuario=null;

  usuario:Usuario={
    username:'',
    password:'',
  }



  constructor(
    private router:Router,
    private alertController:AlertController,
    private storage:Storage
        ){ }

  ngOnInit() {
  }


  onSubmit()
  {
    console.log(this.usuario);
    this.logear();
  }

  async logear()
  {
    this.registrado =await this.storage.get(this.usuario.username);

    if (this.registrado!=null)
    {
      if(this.usuario.username==this.registrado.username && this.usuario.password==this.registrado.password)
      {
        console.log("Puede pasar");
        await this.storage.set('session',this.registrado.username);
        this.router.navigate(['/home']);
      }
      else{
        console.log("Usuario no existe!!!");
      }
    }
    else{
      console.log("Pa la casa por agilao");
    }
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
