import Produto from './Produto'

export default class Estoque {
  saldo:number;
  produto:Produto;
  
  constructor(produto:Produto, saldo:number){
    this.produto = produto;
    this.saldo = saldo;
  }

  pagar () {
    console.log('pagou');
  }  
}
