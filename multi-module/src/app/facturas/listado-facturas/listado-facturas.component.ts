import { Component, OnInit } from '@angular/core';
import {FacturasService} from '../facturas.service'
@Component({
  selector: 'app-listado-facturas',
  templateUrl: './listado-facturas.component.html',
  styleUrls: ['./listado-facturas.component.css']
})
export class ListadoFacturasComponent implements OnInit {

  facturas = [];
  id: string
  constructor(private fs: FacturasService) { }

  ngOnInit(): void {
    this.facturas = this.fs.obtenerFacturas();
  }

  buscarFactura(){
    let id = parseInt(this.id)
    console.log(this.fs.buscarFacturas(id))
  }



}
