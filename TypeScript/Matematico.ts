function Suma (num1:number,num2:number) : number{
    return num1 + num2
}
function Resta (num1:number,num2:number) : number{
    return num1 - num2
}
function Multiplicacion (num1:number,num2:number) : number{
    return num1 * num2
}
function Division (num1:number,num2:number) : number{
    return num1 / num2
}

const mayorDeDosNumeros = (num1: number, num2: number) =>{
    
    let mayor: number = 0
    if(num1> num2)
    {
        return num1
    }

    return num2
}

enum Role  {'Admin', 'User', 'SuperUser'};

type Department = "hr"|"MKT"
function AgregarUsuario(nombre : string, rol : Role, depto: Department): void{

        console.log ('Usuario agregado')
}

AgregarUsuario('Ivan', Role.Admin, "hr");