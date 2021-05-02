import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Instrumento } from './instrumento';

@Injectable({
  providedIn: 'root'
})
export class InstrumentoService {


  private readonly baseURL = "http://localhost:57157/api/Instrumento";
  private apiUrl;



  constructor(private http: HttpClient) {



  }


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

  deleteInstrument(id: number):Observable<Instrumento>{

    return this.http.delete<Instrumento>(this.baseURL + "/" + id);

  }


  //configuramos el tipo de respuesta
  //de una petición http
  formHtppOptions(): any {
    const httpOptionsPlain = {
      headers: new HttpHeaders({
        'Accept': 'text/plain',
        'Content-Type': 'text/plain'
      }),
      'responseType': 'text'
    };
    return httpOptionsPlain;
  }


  getNameInstrumento(id:number):Observable<any>{

    this.apiUrl = this.baseURL + "/GetNameInstrument";
    return this.http.get<any>(this.apiUrl + "/" + id, this.formHtppOptions());
  }

  putReducirCantidad(id:number, instrumento : Instrumento):Observable<any>{
    this.apiUrl = this.baseURL + "/PutReducirCantidad";
    return this.http.put<any>(this.apiUrl + "/" + id, instrumento);
  }

  PutReducirAndAumentarCantidad(id:number, idNuevo:number,instrumento : Instrumento):Observable<any>{
    this.apiUrl = this.baseURL + "/PutReducirAndAumentarCantidad";
    return this.http.put<any>(this.apiUrl + "/" + id + "/" + idNuevo, instrumento);
  }






}
