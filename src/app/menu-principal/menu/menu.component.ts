import { Component } from '@angular/core';
import { AutenticacionService } from 'src/app/services/autenticacion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  usuarioregistro = false;

  constructor(public autenticacion: AutenticacionService, private router : Router){}
  
  ngOnInit(){
    this.usuarioregistro = this.autenticacion.isLoggedIn('');
    this.autenticacion.changeLoginStatus$.subscribe(
      (loggedStatus : boolean) => this.usuarioregistro = loggedStatus
    );
    
  }

  logout(){
    this.autenticacion.logout();
    this.router.navigate(['/login']);
  }

}
