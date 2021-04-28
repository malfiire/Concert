import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Musico } from './musico';

@Injectable({
  providedIn: 'root'
})
export class MusicoService {

  private readonly baseURL = "http://localhost:57157/api/Musico";

  constructor(private http: HttpClient) { }

  getMusicos(): Observable<Musico[]>{

  return this.http.get<Musico[]>(this.baseURL);

  }

  getMusico(id:number):Observable<Musico>{
    return this.http.get<Musico>(this.baseURL + "/" + id);
  }

  postMusico(musico:Musico):Observable<Musico>{
    return this.http.post<Musico>(this.baseURL, musico);
  }

  putMusico(musico: Musico):Observable<Musico>{
    return this.http.put<Musico>(this.baseURL + "/" + musico.id, musico);
  }

  delete(id:number):Observable<Musico>{
    return this.http.delete<Musico>(this.baseURL + "/" + id);
  }




}
