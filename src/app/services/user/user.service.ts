import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = 'localhost:8000/user'
  constructor(private http: HttpClient) { }

  getUser(login: string, password: string): Observable<Object> {
    let url = `${this.baseUrl}/?password=${password}&login=${login}`
    return this.http.get(url,)
  }
}
