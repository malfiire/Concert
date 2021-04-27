import { Component, OnInit } from '@angular/core';
import { error } from 'selenium-webdriver';
import { Instrumento } from './instrumento';
import { InstrumentoService } from './instrumento.service';

@Component({
  selector: 'app-instrumento',
  templateUrl: './instrumento.component.html',
  styleUrls: ['./instrumento.component.css']
})
export class InstrumentoComponent implements OnInit {


  //lista de instrumentos
  instrumentos : Instrumento[];

  //inyectamos el servicio
  constructor(private instrumentoService : InstrumentoService) { }

  ngOnInit(): void {
    this.rellenarInstrumentos();
  }

  rellenarInstrumentos(){
    //inicializamos el vector de instrumentos
    this.instrumentoService.getInstruments().subscribe(item => this.instrumentos = item,
      error => console.error());
  }

  deleteInstrument(id: number){
    this.instrumentoService.deleteInstrument(id).subscribe(item => 
      this.rellenarInstrumentos(), error=> error(error));
  }

}
