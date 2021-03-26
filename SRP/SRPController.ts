import express, {Request, Response} from 'express';
import Contrato from './entities/Contrato';
import Produto from './entities/Produto';
import Estoque from './entities/Estoque';

export default class SRPController {

  executar(req:Request, res:Response) {
  
    const produto = new Produto("cadeira");
    const estoque = new Estoque(produto, 100);
    const contrato = new Contrato(100,
                                  50,
                                  'J',
                                  produto);
      
    if ( contrato.ehPessoaJuridica() ) {
      contrato.valor = contrato.valor + (contrato.valor*0.10);
    }
  
    contrato.pagar();
    contrato.baixarEstoque(estoque);
  
    console.log(estoque.saldo);
    
    res.json();
  }
}