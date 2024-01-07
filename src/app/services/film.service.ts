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
        'Accept':'*/*',
        'Content-Type': 'application/json',
      }
    )
  };
  constructor(private _http: HttpClient) { }

  addFilm(data:any): Observable<any>{
    return this._http.post('http://localhost:9696/film/ajout',data, this.httpOptions);
  }
  updateFilm(data:any, id:any): Observable<any>{
    return this._http.put('http://localhost:9696/film/'+id,data, this.httpOptions);
  }
  getAllCategories(): Observable<any>{
    return this._http.get('http://localhost:9696/categorie/');
  }
  GetAllRealisateur(): Observable<any>{
    return this._http.get('http://localhost:9696/realisateur/');
  }
  getAllFilms(): Observable<any>{
    return this._http.get('http://localhost:9696/film/');
  }
  deleteFilm(id: number): Observable<any> {
    return this._http.get('http://localhost:9696/film/supprimer/'+id);

  }

}
