import {Estagio} from "./Estagio";
import {FolhaDePagamento} from "./FolhaDePagamento";
import {ContratoClt} from "./ContratoClt";


var estagiario = new Estagio()
var folhaDePagamentoEstagiario = new FolhaDePagamento(estagiario)
folhaDePagamentoEstagiario.calcular()
folhaDePagamentoEstagiario.getSaldo()

var funcionarioClt = new ContratoClt()
var folhaDePagamentoFuncionarioClt = new FolhaDePagamento(funcionarioClt)
folhaDePagamentoFuncionarioClt.calcular()
folhaDePagamentoFuncionarioClt.getSaldo()