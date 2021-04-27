

import { RouterModule, Routes } from "@angular/router";
import { InstrumentoFormComponent } from "./instrumento/instrumento-form/instrumento-form.component";
import { InstrumentoComponent } from "./instrumento/instrumento.component";

const routes : Routes = [

  {path: "" , component: InstrumentoComponent}, //sin ruta, por defecto quiero que se vaya al componenete de instrumento
  {path: "instrumento", component: InstrumentoComponent},
  {path: "instrumento-edit/:id", component: InstrumentoFormComponent},
  {path: "instrumento-add", component: InstrumentoFormComponent}
]

//necesito exportar la constante, para ponerla en el app.module
export const routing = RouterModule.forRoot(routes);
