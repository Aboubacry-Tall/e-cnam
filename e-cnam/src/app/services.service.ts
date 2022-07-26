import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { User } from './login/models/user';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  private server = "http://localhost:8082/lib/";
  private baseUrl = "http://localhost:8082/lib/Rendiezvaus";
  constructor(private http: HttpClient) { }

  login(user: User): Observable<any>{
    return this.http.post(this.server + 'login', user);
  }



  getRendiezvausList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
    
  }
  

  updateRendiezVaus(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }


  getRendezVaus(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }


  loggedin(){
    return localStorage.getItem('userId');
  }
}
