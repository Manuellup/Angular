"use strict";
var myBoolean = true;
var myNumber = 1234;
var myStringArray = [`first`, `second`, `third`];
var flag = false;
let dato = 'dato cadena';
dato = 1000;
dato = true;
console.log(dato);
var Brands;
(function (Brands) {
    Brands[Brands["Chevrolet"] = 0] = "Chevrolet";
    Brands[Brands["Cadillac"] = 1] = "Cadillac";
    Brands[Brands["Ford"] = 2] = "Ford";
    Brands[Brands["Buick"] = 3] = "Buick";
    Brands[Brands["Chrysler"] = 4] = "Chrysler";
    Brands[Brands["Dodge"] = 5] = "Dodge";
})(Brands || (Brands = {}));
;
const myCar = Brands.Chevrolet;
function SaludaUsuario() {
    console.log('Hola usuario');
}
let marca = "Bachoco";
function SumaDeNumeros(num1, num2) {
    return num1 + num2;
}
class Persona {
    constructor(n, ap, am, mayorDeEdad) {
        this.mayorDeEdad = mayorDeEdad;
        this.nombre = "";
        this.apellidoPaterno = "";
        this.apellidoMaterno = "";
        this.nombre = n;
        this.apellidoPaterno = ap;
        this.apellidoMaterno = am;
    }
    getINE() {
        return this.mayorDeEdad ? "Puede tramitar el INE" : "No puede asignarsele INE";
    }
}
class Rectangulo {
    constructor() {
        this.base = 0;
        this.altura = 0;
        this.color = "azul";
    }
    calcularArea() {
        return this.base * this.altura;
    }
}
class Triangulo {
    constructor() {
        this.base = 0;
        this.altura = 0;
        this.color = "Verde";
        this.diametro = 10;
    }
    calcularArea() {
        return (this.base * this.altura) / 2;
    }
}
class Circulo {
    constructor() {
        this.radio = 10;
        this.color = "rojo";
    }
    calcularArea() {
        return Math.PI * Math.pow(this.radio, 2);
    }
}
class TrianguloIsoceles extends Triangulo {
}
class TrianguloEscaleno extends Triangulo {
}
class TrianguloRectangulo extends Triangulo {
}
let miTriangulo = new TrianguloRectangulo();
miTriangulo.color = 'verde';
miTriangulo.calcularArea();
