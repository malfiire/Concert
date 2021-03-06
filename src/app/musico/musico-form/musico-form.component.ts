import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { error } from 'selenium-webdriver';
import { Musico } from '../musico';
import { MusicoService } from '../musico.service';

import { DatePipe } from "@angular/common";
import { InstrumentoService } from 'src/app/instrumento/instrumento.service';
import { Instrumento } from 'src/app/instrumento/instrumento';

@Component({
  selector: 'app-musico-form',
  templateUrl: './musico-form.component.html',
  styleUrls: ['./musico-form.component.css']
})
export class MusicoFormComponent implements OnInit {

  formGroup: FormGroup;

  edit:boolean;

  idMusico:number;

  //para que al dar de alta a un musico pueda elegir
  //el instrumento que quiera tocar
  instrumentos:Instrumento[];
  musicoDefault: Musico;
  instrumentoDefault:Instrumento;



  constructor(
    private builder: FormBuilder,
    private musicoService : MusicoService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    //para formatear la fecha de ingreso del músico
    private datePipe: DatePipe,
    private instrumentoService: InstrumentoService

    ) { }

  ngOnInit(): void {

    //formulario vacío con las propiedades del objeto músico
    this.buildFormEmpty();

    //rellenamos el formualario con los datos para acutalizar
    //o simplemente lo dejamos vacío si se trato de la creación
    this.checkForm();


    this.rellenarInstrumentos();

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
          this.completeteFormToEdit(objectt));

      }
    })

  }

  private completeteFormToEdit(musico: Musico):void{

    //asignamos el objeto al formulario
    this.formGroup.patchValue({
      nombreMusico: musico.nombreMusico,
      //utilizamos una pipe para formatear la fecha, ya que el input de tipo date
      //necesita la fecha en formato "yyyy-MM-dd"
      fechaIngreso: this.datePipe.transform(musico.fechaIngreso,"yyyy-MM-dd"),
      sueldoMusico: musico.sueldoMusico,
      instrumentoId: musico.instrumentoId
    })
    this.musicoDefault = musico;



  }

  saveOrEdit(){

    //objeto músico sin id, con los datos que ha introducido el usuario
    let musico: Musico = Object.assign({}, this.formGroup.value);

    if(this.edit){
      //le añadimos el id, para que sepa que elemento tenemos que actualizar
      musico.id = this.idMusico;

      if(this.musicoDefault.instrumentoId != musico.instrumentoId){

        //actualizar la cantidad => aumentando y reduciendo la cantidad de los instrumentos

        this.instrumentoService.PutReducirAndAumentarCantidad(this.musicoDefault.instrumentoId, musico.instrumentoId, new Instrumento())
        .subscribe(response => this.musicoService.putMusico(musico).subscribe(response =>
          this.success(), error => console.error(error)));

      }else{

        this.musicoService.putMusico(musico).subscribe(response =>
          this.success(), error => console.error(error));

      }

    }else{
      //modo creación
      //reducimos la cantidad del instrumento elegido e insertamos el nuevo músico
      this.instrumentoService.putReducirCantidad(musico.instrumentoId, new Instrumento()).subscribe(
        response => this.musicoService.postMusico(musico).subscribe(
          response=>this.success(), error => console.error(error)
        ));



    }
  }




   //cuando las operaciones de guardar o editar sean correctas,
  //redirecciono hacia la tabla del musicos, para ver los cambios.
  private success():void{
    this.router.navigate(["/musico"]);
  }


  private rellenarInstrumentos():void{
    this.instrumentoService.getInstruments().subscribe(item =>
      this.instrumentos = item, error => console.error(error));
  }

}
