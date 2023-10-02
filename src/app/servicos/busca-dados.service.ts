import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Data } from '../Models/Data';
import { LoginService } from './login.service';
import { Login } from '../Models/Login';

@Injectable({
  providedIn: 'root'
})
export class BuscaDadosService {

apiUrl = 'https://gsm-hmg.centralitcloud.com.br/citsmart/services';
dataUrl = `${this.apiUrl}/data/query`;

private _refreshrequired=new Subject<void>();
  get RequiredRefresh(){
    return this._refreshrequired;
  }

  constructor(
    private http: HttpClient,
    ) { }

  dadosCITSmart(login: Login): Observable<Data> {
    return this.http.post<Data>(this.dataUrl, login)
  }

  getData() {
    return [71, 78, 39, 66];
  }
}
