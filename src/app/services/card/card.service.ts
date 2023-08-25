import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  baseUrl = 'localhost:8000/card'
  constructor(private http: HttpClient) { }

  getCard(id: number): Observable<Object> {
    let url = `${this.baseUrl}/?id=${id}`
    return this.http.get(url,)
  }
}
