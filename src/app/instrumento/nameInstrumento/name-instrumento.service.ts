import { Injectable } from '@angular/core';
import { error } from 'selenium-webdriver';
import { InstrumentoService } from '../instrumento.service';

@Injectable({
  providedIn: 'root'
})
export class NameInstrumentoService {

  nameInstrumento: string;

  constructor(private instrumentoService: InstrumentoService) {}



  saveNameInstrumento(id:number): void{

    this.instrumentoService.getNameInstrumento(id)
    .subscribe(name => this.nameInstrumento = name,
    error => console.error(error));

    localStorage.setItem("nameInstrument", this.nameInstrumento);

  }

}
