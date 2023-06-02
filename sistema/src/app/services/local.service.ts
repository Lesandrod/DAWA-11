import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Local } from '../models/local';

@Injectable({
  providedIn: 'root'
})
export class LocalService {
  url = 'http://localhost:4000/api/local/';

  constructor(private http: HttpClient) { 

  }

  getLocales(): Observable<Local[]> {
    return this.http.get<Local[]>(this.url);
  }
  

  deleteLocal(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }

  guardarLocal(local: Local): Observable<Local[]> {
    return this.http.post<Local[]>(this.url, local);
  }

  viewLocal(_id?: string): Observable<any> {
    return this.http.get(this.url + _id)
  }

  actualizarLocal(_id: string, local: Local): Observable<Local[]> {
    return this.http.put<Local[]>(this.url + _id, local);
  }

}