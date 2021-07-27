import {Remuneravel} from "./Remuneravel";

export class FolhaDePagamento {
    private funcionario: Remuneravel
    private saldo: number = 0;

    constructor(funcionario: Remuneravel) {
        this.funcionario = funcionario
    }

    calcular() {
        this.saldo = this.funcionario.remuneracao()
    }

    getSaldo() {
        console.log('saldo: '.concat(this.saldo.toString()))
    }
}
