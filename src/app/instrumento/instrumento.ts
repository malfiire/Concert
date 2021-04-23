export class Instrumento{
    id:number;
    nombreInstrumento: string;
    tipoInstrumento:string;
    marcaInstrumento:string;
    precioInstrumento:number;
    cantidad:number;

    constructor(id:number, nombreInstrumento:string, tipoInstrumento:string,
      marcaInstrumento:string, precioInstrumento:number, cantidad: number){

        this.id = id;
        this.nombreInstrumento = nombreInstrumento;
        this.tipoInstrumento  = tipoInstrumento;
        this.marcaInstrumento = marcaInstrumento;
        this.precioInstrumento = precioInstrumento;
        this.cantidad = cantidad;
    }
}
