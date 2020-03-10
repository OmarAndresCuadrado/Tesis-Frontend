import { Component, OnInit } from '@angular/core';
import { User } from '../../interfaces/user';
import Swal from 'sweetalert2';
import { AuthService } from '../../services/auth.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User();

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login(): void {
    console.log(this.user);
    if (this.user.email == null || this.user.passsword == null) {
      Swal.fire('Error Login', 'Email o Contraseñas vacias', 'error');
      return;
    } else {
      this.authService.login(this.user)
        .subscribe(resp => {
          console.log(resp);
          //CABEZA, PAYLOAD ,FIRMA
          //Utilizando atob desiframos la base 265
          //Convertimos el objeto a un json
          let payload = JSON.parse(atob(resp.access_token.split('.')[1]));
          console.log(payload);
          this.router.navigate(['/dashboardTweets']);
          Swal.fire('Ingreso Exitoso', `¡Bienvenido ${payload.user_name}!`, 'success') ;
          this.user = resp;
        }, error => {
          console.log(error);
        })

    }
  }

}
