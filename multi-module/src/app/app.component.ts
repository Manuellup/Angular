import { Component } from '@angular/core';
import {ListadoClientesComponent} from './clientes/listado-clientes/listado-clientes.component'
import { ListadoFacturasComponent } from './facturas/listado-facturas/listado-facturas.component';
import {NotasComponent} from './notas/notas/notas.component'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'multi-module';
}
