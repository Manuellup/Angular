import { ConstantPool } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

import { Nota } from '../nota';
import{NotasService} from '../notas.service'

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css']
})
export class NotasComponent implements OnInit {

  constructor(private ns: NotasService) { }
  notas:Nota[]
  button: boolean = true;
  idToDelete: string
  title: string
  content: string
  ngOnInit(): void {
    this.getNotas()
  }

  getNotas():void{
    this.ns.getNotas().subscribe(nota=>(this.notas=nota));
  }
  agregarNota(){
    //this.showInputs = true
    let nota:Nota = {title: this.title, content: this.content}
    this.ns.addNota(nota).subscribe();
  }

  eliminarNota(id: string){
  this.ns.deleteNota(id).subscribe(()=>{
    alert(`Nota con el id ${id} eliminada`)
  });

  }

  modificarNota(){

  }

}
