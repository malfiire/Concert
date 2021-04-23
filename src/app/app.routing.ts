

import { RouterModule, Routes } from "@angular/router";
import { InstrumentoComponent } from "./instrumento/instrumento.component";

const routes : Routes = [

  {path: "" , component: InstrumentoComponent} //sin ruta, por defecto quiero que se vaya al componenete de instrumento

]

//necesito exportar la constante, para ponerla en el app.module
export const routing = RouterModule.forRoot(routes);
