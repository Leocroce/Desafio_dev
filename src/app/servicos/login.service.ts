import { Login } from './../Models/Login';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  apiUrl = 'https://gsm-hmg.centralitcloud.com.br/citsmart/services';
  loginUrl = `${this.apiUrl}/login`;

  bodyLogin = {
    clientId: 'API_PBI',
    language: 'pt_BR',
    userName: 'citsmart.local\\desafiodev',
    password: 'desafioDev1@'
  };

  readonly token : string = '';

  constructor(private http: HttpClient) {

  }

  loginCITsmart(): Observable<Login> {
    return this.http.post<Login>(this.loginUrl, this.bodyLogin)
  }

}
