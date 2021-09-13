"use strict";
function Suma(num1, num2) {
    return num1 + num2;
}
function Resta(num1, num2) {
    return num1 - num2;
}
function Multiplicacion(num1, num2) {
    return num1 * num2;
}
function Division(num1, num2) {
    return num1 / num2;
}
const mayorDeDosNumeros = (num1, num2) => {
    let mayor = 0;
    if (num1 > num2) {
        return num1;
    }
    return num2;
};
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["User"] = 1] = "User";
    Role[Role["SuperUser"] = 2] = "SuperUser";
})(Role || (Role = {}));
;
function AgregarUsuario(nombre, rol, depto) {
    console.log('Usuario agregado');
}
AgregarUsuario('Ivan', Role.Admin, "hr");
