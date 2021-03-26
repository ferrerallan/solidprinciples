import express, {Request, Response} from 'express';
import Contrato from './entities/Contrato';
import ContratoService from './application/ContratoService';
import Estoque from './entities/Estoque';
import Produto from './entities/Produto';

export default class DIPController {

  executar(req:Request, res:Response) {
    const produto = new Produto("cadeira");
    const estoque = new Estoque(produto, 100);
    const contrato = new Contrato(100,
                                  50,
                                  'J',
                                  produto);
                                  
    const contratoService = new ContratoService();
    contratoService.consolidar(contrato)
    res.json();
  }
}