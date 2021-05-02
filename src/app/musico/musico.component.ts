import { Component, OnInit } from '@angular/core';
import { error } from 'selenium-webdriver';
import { MusicoService } from './musico.service';

@Component({
  selector: 'app-musico',
  templateUrl: './musico.component.html',
  styleUrls: ['./musico.component.css']
})
export class MusicoComponent implements OnInit {

  musicos: any; //para que pueda recibir cualquier tipado


  constructor(private musicoService: MusicoService) {   }

  ngOnInit(): void {
    this.rellenarMusicosWithInstrumentName();
  }

  deleteMusico(id:number):void{
    this.musicoService.delete(id).subscribe(response => this.rellenarMusicosWithInstrumentName(),
    error => console.error(error));
  }

  rellenarMusicosWithInstrumentName():void{
    this.musicoService.getMusicosWithInstrumentName().subscribe(musico => this.musicos = musico,
      error =>console.error(error));
  }





}
