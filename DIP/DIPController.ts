import express, {Request, Response} from 'express';
import GeradorNotaFiscal from './application/GeradorNotaFiscal';
import EnviadorEmailNovo from './refatoracao/EnviadorEmailNovo';
import GeradorNotaFiscalNovo from './refatoracao/GeradorNotaFiscalNovo';
import NotaFiscalRepositoryNovo from './refatoracao/NotaFiscalRepositoryNovo';
import SAPServiceNovo from './refatoracao/SAPServiceNovo';

export default class DIPController {

  executar(req:Request, res:Response) {
    const geradorNF = new GeradorNotaFiscal();
    geradorNF.gerarNota();
    
    res.json();
  }

  executarRefatorado(req:Request, res:Response) {
    const geradorNF = new GeradorNotaFiscalNovo();
    geradorNF.adicionarAcao(new EnviadorEmailNovo());
    geradorNF.adicionarAcao(new SAPServiceNovo());
    geradorNF.adicionarAcao(new NotaFiscalRepositoryNovo());

    geradorNF.gerarNota();
    
    res.json();
  }
}