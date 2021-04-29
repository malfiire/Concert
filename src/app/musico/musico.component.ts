import { Component, OnInit } from '@angular/core';
import { error } from 'selenium-webdriver';
import { InstrumentoService } from '../instrumento/instrumento.service';
import { Musico } from './musico';
import { MusicoService } from './musico.service';

@Component({
  selector: 'app-musico',
  templateUrl: './musico.component.html',
  styleUrls: ['./musico.component.css']
})
export class MusicoComponent implements OnInit {


  musicos: Musico[];
  nameInstrumento:string;


  constructor(private musicoService: MusicoService,
    private instrumentoService:InstrumentoService) {   }

  ngOnInit(): void {
    this.rellenarMusicos();
    this.getNameInstrumento(2);
  }
  rellenarMusicos():void{

    this.musicoService.getMusicos().subscribe(musico => this.musicos = musico ,
      error => console.error(this));
  }

  deleteMusico(id:number):void{
    this.musicoService.delete(id).subscribe(response => this.rellenarMusicos(),
    error => console.error(error));
  }

  getNameInstrumento(id:number):string{

    this.instrumentoService.getNameInstrumento(id).subscribe(
    name=> this.nameInstrumento = name , error => console.error(error));
    return this.nameInstrumento;
  }



}
