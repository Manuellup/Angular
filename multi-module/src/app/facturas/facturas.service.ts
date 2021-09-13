import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Factura } from '../models/factura';

@Injectable({
  providedIn: 'root'
})
export class FacturasService {

  facturas: Factura [] = [
    {id:1, fecha: '8/9/2021',cliente:1, monto: 340 },
    {id:2, fecha: '8/9/2021',cliente:2, monto: 401 }
  ]
  constructor() { }
  buscarFacturas(id:number):Factura {
    let facturaBuscada: Factura;
    this.facturas.forEach((fa)=>{
      if(fa.id===id){
        facturaBuscada = fa
      }
    })
    return facturaBuscada;
  }

  agregarFactura(factura:Factura): void{

    this.facturas.push(factura)
  }
  obtenerFacturas(): Factura[]{

    return this.facturas;
  }

}
