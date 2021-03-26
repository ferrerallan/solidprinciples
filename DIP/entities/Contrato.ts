import Produto from './Produto';
import Estoque from './Estoque';

export default class Contrato {
  valor:number;
  quantidade:number;
  tipoPessoa:String;
  produto: Produto;

  constructor(valor:number,
              quantidade:number,
              tipoPessoa:String,
              produto:Produto){
                this.valor = valor;
                this.quantidade = quantidade;
                this.tipoPessoa = tipoPessoa;
                this.produto = produto;
              }

  pagar () {
    console.log('pagou');
  }

  baixarEstoque( estoque: Estoque){
    estoque.saldo -= this.quantidade; 
  }

  ehPessoaJuridica():boolean {
    return this.tipoPessoa=='P';
  }

  
}
