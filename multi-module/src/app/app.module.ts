import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule} from './app-routing.module'

import { AppComponent } from './app.component';
import {ClientesModule} from './clientes/clientes.module'
import {FacturasModule} from './facturas/facturas.module';
import {NotasModule} from './notas/notas.module'

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    ClientesModule,
    FacturasModule,
    NotasModule,
    AppRoutingModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
