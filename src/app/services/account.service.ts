import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../../src/environments/environment';
import { from } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" }),
};

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  login(dados: any): Promise<any> {
    return this.http.post(`${environment.api}/auth/login`, dados, httpOptions).toPromise();
  }

  answer(dados: any): Promise<any> {
    return this.http.post(`${environment.api}/answers`, dados, httpOptions).toPromise();
  }

  questions(): Promise<any> {
    return this.http.get(`${environment.api}/questions`, httpOptions).toPromise();
  }
}
