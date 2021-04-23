import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Instrumento } from './instrumento';

@Injectable({
  providedIn: 'root'
})
export class InstrumentoService {


  private readonly baseURL = "http://localhost:57157/api/Instrumento";

  constructor(private http: HttpClient) {}


  getInstruments():Observable<Instrumento[]>{

      return this.http.get<Instrumento[]>(this.baseURL);

  }

  getInstrument(id: string):Observable<Instrumento>{
    return this.http.get<Instrumento>(this.baseURL + "/" + id);
  }

  postInstrument(instrument: Instrumento):Observable<Instrumento>{

    return this.http.post<Instrumento>(this.baseURL, instrument);

  }

  putInstrument(instrument: Instrumento): Observable<Instrumento>{

    let idInstrumento = instrument.id.toString();

    return this.http.put<Instrumento>(this.baseURL + "/" +  idInstrumento, instrument);

  }

  deleteInstrument(id: string):Observable<Instrumento>{

    return this.http.delete<Instrumento>(this.baseURL + "/" + id);

  }




}
