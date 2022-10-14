import { Component, OnInit } from '@angular/core';
import { Usuario } from './../../interfaces/usuario';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  usuario: Usuario = {
    username: '',
    password: ''
  }

  constructor(private storage: Storage, private router:Router) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.usuario);
    this.addUser();
  }


  async addUser() {
    let found = await this.storage.get(this.usuario.username);

    if (found == null) {
      // crear user
      await this.storage.set(this.usuario.username, this.usuario);
      console.log("Registro Satisfactorio");
      this.router.navigate(['/login']);
    } else {
      // mostrar error (ya existe un usuario con ese nombre)
      console.log("Usuario ya existe");
    }
  }

}
