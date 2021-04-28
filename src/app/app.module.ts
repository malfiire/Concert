
import { HttpClientModule } from '@angular/common/http';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { InstrumentoComponent } from './instrumento/instrumento.component';
import { InstrumentoService } from './instrumento/instrumento.service';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { InstrumentoFormComponent } from './instrumento/instrumento-form/instrumento-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MusicoComponent } from './musico/musico.component';

@NgModule({
  declarations: [
    AppComponent,
    InstrumentoComponent,
    NavMenuComponent,
    InstrumentoFormComponent,
    MusicoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing,
    HttpClientModule,
    ReactiveFormsModule
    ],
  providers: [InstrumentoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
