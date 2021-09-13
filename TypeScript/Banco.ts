interface ICuenta {

    saldo: number 
    deposito ():number;
    retiro(): number;
    consultaSaldo(): number;
}

interface ICuentaDeCredito extends ICuenta{
    calculaInteres():number;
}

class CuentaPersonal implements ICuenta{
    saldo: number = 0 ;
    deposito(): number {
        throw new Error("Method not implemented.");
    }
    retiro(): number {
        throw new Error("Method not implemented.");
    }
    consultaSaldo(): number {
        throw new Error("Method not implemented.");
    }

}

class CuentaEmpresarial implements ICuenta{
    saldo: number =0;
    deposito(): number {
        throw new Error("Method not implemented.");
    }
    retiro(): number {
        throw new Error("Method not implemented.");
    }
    consultaSaldo(): number {
        throw new Error("Method not implemented.");
    }

}

class TarjetaDeCredito implements ICuentaDeCredito{
    saldo: number = 0;
    calculaInteres(): number {
        throw new Error("Method not implemented.");
    }
    deposito(): number {
        throw new Error("Method not implemented.");
    }
    retiro(): number {
        throw new Error("Method not implemented.");
    }
    consultaSaldo(): number {
        throw new Error("Method not implemented.");
    }

}