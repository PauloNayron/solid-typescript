import {ContratoClt} from "./ContratoClt";
import {Estagio} from "./Estagio";

export class FolhaDePagamento{
    private saldo: number = 0;

    calcular(funcionario: ContratoClt|Estagio) {
        if(funcionario instanceof ContratoClt) {
            this.saldo = funcionario.salario()
        } else if (funcionario instanceof Estagio) {
            this.saldo = funcionario.bolsaAuxilio()
        }
    }

    getSaldo() {
        console.log('saldo: '.concat(this.saldo.toString()))
    }
}