import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InstrumentoComponent } from './instrumento/instrumento.component';
import { InstrumentoService } from './instrumento/instrumento.service';

@NgModule({
  declarations: [
    AppComponent,
    InstrumentoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [InstrumentoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
