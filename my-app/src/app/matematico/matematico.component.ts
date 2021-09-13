import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matematico',
  templateUrl: './matematico.component.html',
  styleUrls: ['./matematico.component.css']
})
export class MatematicoComponent implements OnInit {

  numero1: number
  numero2: number
  resul: number
  option: string = "1"
  constructor() { }
limpiaCajasEjecutado(){
  this.numero1 = 0
  this.numero2 = 0
}
  ngOnInit(): void {
  }
  calcularOperacion(){

    switch(this.option){
      case "1":
        this.resul=this.numero1+this.numero2
        break;

        case "2":
          this.resul=this.numero1-this.numero2
        break;

        case "3":
          this.resul=this.numero1*this.numero2
        break;

        case "4":
          this.resul=this.numero1/this.numero2
        break;
    }
  }

}
