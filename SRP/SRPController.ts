import express, {Request, Response} from 'express';
import EmailServiceV1 from '../OCP/refatoracao/EmailServiceV1';
import GeradorNotaFiscalRefatorado from '../OCP/refatoracao/GeradorNotaFiscalRefatorado';
import NotaFiscalRepositoryOracle from '../OCP/refatoracao/NotaFiscalRepositoryOracle';
import SAPService from '../OCP/refatoracao/SAPService';
import NotaFiscalService from './application/NotaFiscalService';
import NotaFiscal from './entities/NotaFiscal';
import GeradorNotaFiscal from './refatoracao/GeradorNotaFiscal';

export default class SRPController {

  executar(req:Request, res:Response) {
    console.log('SRP');
    const notaFiscal = new NotaFiscal();
    notaFiscal.numero=10;
    notaFiscal.valor=100;
    notaFiscal.emailCliente='cliente@brasil.com';

    const notaFiscalService = new NotaFiscalService();
    notaFiscalService.enviarEmail(notaFiscal);
    notaFiscalService.salvar(notaFiscal);
    notaFiscalService.integarSAP(notaFiscal);

    res.json();
  }

  executarRefatorado(req:Request, res:Response) {
        
    const geradorNF = new GeradorNotaFiscalRefatorado(
      new EmailServiceV1(),
      new NotaFiscalRepositoryOracle(),
      new SAPService() 
    );
    geradorNF.gerarNota();
    res.json();
  }

}