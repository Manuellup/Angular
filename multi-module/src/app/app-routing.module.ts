import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoClientesComponent } from './clientes/listado-clientes/listado-clientes.component';
import { ListadoFacturasComponent } from './facturas/listado-facturas/listado-facturas.component';
import { NotasComponent } from './notas/notas/notas.component';

//aqui van las rutas
const routes : Routes =[
   {path: 'notas', component: NotasComponent },
   {path: 'clientes', component: ListadoClientesComponent },
   {path: 'facturas', component: ListadoFacturasComponent }

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
