import express, {Request, Response} from 'express';
import EmailServiceV1 from './refatoracao/EmailServiceV1';
import GeradorNotaFiscalRefatorado from './refatoracao/GeradorNotaFiscalRefatorado';
import NotaFiscalRepositoryOracle from './refatoracao/NotaFiscalRepositoryOracle';
import SAPService from './refatoracao/SAPService';
import NotaFiscal from './entities/NotaFiscal';
import GeradorNotaFiscal from './application/GeradorNotaFiscal';
import NotaFiscalRepositoryTXT from './refatoracao/NotaFiscalRepositoryOracle';

export default class OCPController {

  executar(req:Request, res:Response) {
    
    const geradorNF = new GeradorNotaFiscal();
    geradorNF.gerarNota();
    
    res.json();
  }

  executarRefatorado(req:Request, res:Response) {
        
    const geradorNF = new GeradorNotaFiscalRefatorado(
      new EmailServiceV1(),
      new NotaFiscalRepositoryTXT(),
      new SAPService() 
    );
    geradorNF.gerarNota();
    res.json();
  }

}