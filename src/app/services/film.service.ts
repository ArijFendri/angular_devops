import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

   httpOptions = {
    headers: new HttpHeaders(
      {
        'Content-Type': 'application/json',
      }
    )
  };
  constructor(private _http: HttpClient) { }

  addFilm(data:any): Observable<any>{
    return this._http.post('http://localhost:9696/film/ajout',data, this.httpOptions);
  }

}
