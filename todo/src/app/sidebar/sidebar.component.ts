import { ConstantPool } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  dato1 : string = "dato del sidebar component";
  estaSeleccionado: boolean = true;

  misClases = {
    seleccionado : true,
    otro: true
  }
  constructor() { }

  checkboxChanged(){
    console.log("Se activo")
  }

  ngOnInit(): void {
  }

}
