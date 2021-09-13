var myBoolean : boolean = true;
var myNumber : number = 1234;
var myStringArray : string[] =[`first` ,`second`, `third`]
var flag : boolean = false;
let dato : any = 'dato cadena';
dato = 1000;
dato = true;
console.log(dato);
type Animal = 'cheeta'|'lion' |'turtle';

enum Brands { Chevrolet, Cadillac, Ford, Buick, Chrysler, Dodge};
const myCar: Brands = Brands.Chevrolet;

function SaludaUsuario () : void {
    console.log('Hola usuario')
}

let marca : string  = "Bachoco";

function SumaDeNumeros( num1:number, num2:number): number{
return num1 + num2;
}

class Persona {
    private nombre: string =""
    private apellidoPaterno : string = ""
    private apellidoMaterno : string= ""

    constructor(n: string , ap:string, am:string , private mayorDeEdad: boolean){
        this.nombre = n
        this.apellidoPaterno = ap
        this.apellidoMaterno = am
        
    }
    getINE(){
        return this.mayorDeEdad  ?  "Puede tramitar el INE": "No puede asignarsele INE"
    }
}

interface FiguraGeometrica {
     color: string 
     diametro?: number;
     calcularArea(): number;
}

class Rectangulo implements FiguraGeometrica{
     
    private base: number = 0 ;
    private altura : number = 0;
    color: string = "azul"
    calcularArea(){
        return this.base * this.altura
    }
     
}

class Triangulo implements FiguraGeometrica{
    private base: number = 0 ;
    private altura : number = 0;
    color: string = "Verde"
    diametro: number = 10 ;
    calcularArea(){
        return (this.base * this.altura)/2
    }
}

class Circulo implements FiguraGeometrica{
     radio : number = 10;
    color: string = "rojo"
    calcularArea(){
        return Math.PI * Math.pow(this.radio, 2);
    }
}

class TrianguloIsoceles extends Triangulo{

}
    
class TrianguloEscaleno extends Triangulo{
    
}

class TrianguloRectangulo extends Triangulo{


}
let miTriangulo = new TrianguloRectangulo();
miTriangulo.color = 'verde'
miTriangulo.calcularArea()