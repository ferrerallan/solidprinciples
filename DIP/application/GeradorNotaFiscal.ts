import NotaFiscal from '../entities/NotaFiscal';
import EmailService from './EmailService';
import SAPService from './SAPService';
import NotaFiscalRepository from './NotaFiscalRepository';

export default class GeradorNotaFiscal{
  gerarNota(){
    console.log('DIP');
    const novaNota = new NotaFiscal();

    novaNota.numero=10;
    novaNota.valor=100;
    novaNota.emailCliente='cliente@brasil.com';

    const enviadorEmail = new EmailService();
    enviadorEmail.enviarEmail(novaNota);

    const servicoSAP = new SAPService();
    servicoSAP.integrar();

    const notaFiscalRepository = new NotaFiscalRepository();
    notaFiscalRepository.persistir(novaNota);

  }
}