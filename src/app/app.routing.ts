

import { RouterModule, Routes } from "@angular/router";
import { InstrumentoFormComponent } from "./instrumento/instrumento-form/instrumento-form.component";
import { InstrumentoComponent } from "./instrumento/instrumento.component";
import { MusicoFormComponent } from "./musico/musico-form/musico-form.component";
import { MusicoComponent } from "./musico/musico.component";

const routes : Routes = [

  {path: "" , component: InstrumentoComponent}, //sin ruta, por defecto quiero que se vaya al componenete de instrumento
  {path: "instrumento", component: InstrumentoComponent},
  {path: "instrumento-edit/:id", component: InstrumentoFormComponent},
  {path: "instrumento-add", component: InstrumentoFormComponent},

  {path: "musico", component: MusicoComponent},
  {path:"musico-add", component:MusicoFormComponent},
  {path:"musico-edit/:id", component:MusicoFormComponent}

]

//necesito exportar la constante, para ponerla en el app.module
export const routing = RouterModule.forRoot(routes);
