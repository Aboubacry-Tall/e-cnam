import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { User } from './login/models/user';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  private server = "http://localhost:8082/lib/";
  constructor(private http: HttpClient) { }

  login(user: User): Observable<any>{
    return this.http.post(this.server + 'login', user);
  }
}
