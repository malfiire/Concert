import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { error } from 'selenium-webdriver';
import { Musico } from '../musico';
import { MusicoService } from '../musico.service';

import { DatePipe } from "@angular/common";

@Component({
  selector: 'app-musico-form',
  templateUrl: './musico-form.component.html',
  styleUrls: ['./musico-form.component.css']
})
export class MusicoFormComponent implements OnInit {

  formGroup: FormGroup;

  edit:boolean;

  idMusico:number;


  constructor(
    private builder: FormBuilder,
    private musicoService : MusicoService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    //para formatear la fecha de ingreso del músico
    private datePipe: DatePipe

    ) { }

  ngOnInit(): void {

    //formulario vacío con las propiedades del objeto músico
    this.buildFormEmpty();

    //rellenamos el formualario con los datos para acutalizar
    //o simplemente lo dejamos vacío si se trato de la creación
    this.checkForm();

  }

  buildFormEmpty():void{
    this.formGroup = this.builder.group({
      nombreMusico: "",
      fechaIngreso: "",
      sueldoMusico: "",
      instrumentoId: ""
    })
  }

  checkForm():void{

    this.activatedRoute.params.subscribe(param => {
      if(param["id"]!=undefined){
        this.edit = true;
        this.idMusico = param["id"];

        //método para rellenar el formulario
        this.musicoService.getMusico(this.idMusico).subscribe(objectt =>
          this.completeteFormToEdit(objectt), error => console.error(error));
      }
    })

  }

  private completeteFormToEdit(musico: Musico):void{

    this.formGroup.patchValue({
      nombreMusico: musico.nombreMusico,
      //utilizamos una pipe para formatear la fecha, ya que el input de tipo date
      //necesita la fecha en formato "yyyy-MM-dd"
      fechaIngreso: this.datePipe.transform(musico.fechaIngreso,"yyyy-MM-dd"),
      sueldoMusico: musico.sueldoMusico,
      instrumentoId: musico.instrumentoId
    })

  }

  saveOrEdit(){

    //objeto músico sin id, con los datos que ha introducido el usuario
    let musico: Musico = Object.assign({}, this.formGroup.value);

    if(this.edit){
      //le añadimos el id, para que sepa que elemento tenemos que actualizar
      musico.id = this.idMusico;
      this.musicoService.putMusico(musico).subscribe(response =>
        this.success(), error => console.error(error));
    }else{
      //modo creación
      this.musicoService.postMusico(musico).subscribe(response =>
        this.success(), error => console.error(error));
    }
  }


   //cuando las operaciones de guardar o editar sean correctas,
  //redirecciono hacia la tabla del musicos, para ver los cambios.
  private success():void{
    this.router.navigate(["/musico"]);
  }

}
