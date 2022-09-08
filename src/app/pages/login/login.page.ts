import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

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

  constructor(private router:Router){ }

  ngOnInit() {
  }

  onSubmit()
  {
    if(this.usuario.username=="Admin" && this.usuario.password=="password")
    {
      let navigationExtras:NavigationExtras={
        state:{
          usr:this.usuario,
        }
      }
      console.log("Usuario Success");
      console.log(this.usuario);

      this.router.navigate(['/home',navigationExtras]);
    }
    else{
      console.log("Acceso Denegado");
    }
  }

}
