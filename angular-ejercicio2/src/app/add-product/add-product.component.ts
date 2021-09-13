import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  producto: string;
  precio: string;

  listProducto = [];


  constructor() { }

  ngOnInit(): void {
  }
  enviarProducto(){
    let nuevoProducto = {
      "producto": this.producto,
      "precio": this.precio
    }
    this.listProducto.push(nuevoProducto)

  }



}
