import {Estagio} from "./Estagio";
import {FolhaDePagamento} from "./FolhaDePagamento";
import {ContratoClt} from "./ContratoClt";


var estagiario = new Estagio()
var folhaDePagamentoEstagiario = new FolhaDePagamento()
folhaDePagamentoEstagiario.calcular(estagiario)
folhaDePagamentoEstagiario.getSaldo()

var funcionarioClt = new ContratoClt()
var folhaDePagamentoFuncionarioClt = new FolhaDePagamento()
folhaDePagamentoFuncionarioClt.calcular(funcionarioClt)
folhaDePagamentoFuncionarioClt.getSaldo()