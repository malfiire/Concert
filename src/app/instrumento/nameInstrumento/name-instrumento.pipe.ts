import { Pipe, PipeTransform } from '@angular/core';
import { Musico } from 'src/app/musico/musico';
import { NameInstrumentoService } from './name-instrumento.service';

@Pipe({
  name: 'nameInstrumento',
  pure:true
})
export class NameInstrumentoPipe implements PipeTransform {


  constructor(private nameInstrumentoService : NameInstrumentoService){
  }



  transform(value: any): any {

    return this.nameInstrumentoService.getNameInstrumento(value);
  }

}
