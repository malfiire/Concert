import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Instrumento } from '../instrumento';
import { InstrumentoService } from '../instrumento.service';


@Component({
  selector: 'app-instrumento-form',
  templateUrl: './instrumento-form.component.html',
  styleUrls: ['./instrumento-form.component.css']
})
export class InstrumentoFormComponent implements OnInit {

  //crear FormGroup para poder interactuar con el formulario
  formGroup : FormGroup;

  //variable para comprobar si el formulario está en modo edición o no
  edit: boolean;

  //id del instrumento para poder conseguir sus datos y mostrarlo en su formulario
  idInstrumento : number;

  constructor(
    private builder: FormBuilder, 
    private instrumentoService: InstrumentoService,
    private router: Router, 
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    //creamos el formulario y lo dejamos en blanco, par que el usuario pueda rellenarlo
    this.buildFormEmpty();

    //comprobar si el formulario es de edición o creación
    this.checkForm();
  }

  private buildFormEmpty(): void{
    this.formGroup = this.builder.group({
        nombreInstrumento : "",
        tipoInstrumento : "",
        marcaInstrumento: "",
        precioInstrumento: "",
        cantidad: ""

    })
  }

  private checkForm(): void{
    this.activatedRoute.params.subscribe(param=>{
      //si recibe un id, significa que el usuario quiere entrar al formulario de edición
      if(param["id"] != undefined){
        
        this.edit = true;
        this.idInstrumento = param["id"];
        this.instrumentoService.getInstrument(this.idInstrumento.toString())
        .subscribe(instrumento => this.completeFormToEdit(instrumento),
        error => console.error(error));
      }
    })
  }

  private completeFormToEdit(instrumento : Instrumento): void{
    this.formGroup.patchValue({
      nombreInstrumento : instrumento.nombreInstrumento,
      tipoInstrumento : instrumento.tipoInstrumento,
      marcaInstrumento: instrumento.marcaInstrumento,
      precioInstrumento: instrumento.precioInstrumento,
      cantidad: instrumento.cantidad
    })
  }

  



}
