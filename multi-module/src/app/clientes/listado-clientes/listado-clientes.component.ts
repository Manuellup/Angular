import { Component, OnInit } from '@angular/core';
import{Cliente} from '../../models/cliente'
import {ClientesService} from '../clientes.service'

@Component({
  selector: 'app-listado-clientes',
  templateUrl: './listado-clientes.component.html',
  styleUrls: ['./listado-clientes.component.css']
})
export class ListadoClientesComponent implements OnInit {



  constructor(private cs: ClientesService) {
    //this.clienteService = new ClientesService();
  }
  clientes = [];


  ngOnInit(): void {
    this.clientes = this.cs.getClientes();
  }

}
