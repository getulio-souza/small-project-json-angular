import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import cursos from '../../assets/cursos.json'

@Injectable({
  providedIn: 'root'
})
export class AppService {

  // public readonly apiUrl = 'assets/cursos.json'
  public readonly apiUrl = 'https://api.jsonbin.io/v3/b/67363733e41b4d34e4546cca'

  constructor(private http: HttpClient) { }

  getCursos():Observable<any>{
    return this.http.get(this.apiUrl)
  }
}
