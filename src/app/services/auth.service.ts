import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //Configuracion del basic auth del JWT
  constructor(private http: HttpClient) { }


  login(user: User): Observable<any> {
    const urlEndPoint = 'http://localhost:8080/oauth/token';
    //Funcion para encriptar la contraseña con base 64
    const credentialApp = btoa('angularapp' + ':' + '12345');
    const httpHeaders = new HttpHeaders
    ({'Content-type': 'application/x-www-form-urlencoded', 'Authorization' : 'Basic ' + credentialApp});
    let params = new URLSearchParams();
    params.set('grant_type', 'password' );
    params.set('username', user.email);
    params.set('password', user.passsword );
    console.log(params.toString());

    //Convertir los params en un string para la URL
    return this.http.post<any>(urlEndPoint, params.toString() , {headers: httpHeaders});
    
  }
}
