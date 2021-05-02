import { Injectable } from '@angular/core';
import { error } from 'selenium-webdriver';
import { InstrumentoService } from '../instrumento.service';

@Injectable({
  providedIn: 'root'
})
export class NameInstrumentoService {

  nameInstrumento: string;

  constructor(private instrumentoService: InstrumentoService) {}



  getNameInstrumento(id:number):string{

    this.instrumentoService.getNameInstrumento(id)
    .subscribe(name => this.nameInstrumento = name,
    error => console.error(error));

    return this.nameInstrumento;

  }

}
