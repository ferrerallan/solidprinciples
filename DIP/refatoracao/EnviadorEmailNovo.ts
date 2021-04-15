import NotaFiscal from '../entities/NotaFiscal';
import IAcaoAposGerarNota from '../interfaces/IAcaoAposGerarNota';

export default class EnviadorEmailNovo implements IAcaoAposGerarNota {
  executar(notaFiscal: NotaFiscal): void {
    console.log(`[refatorado] enviando email para ${notaFiscal.emailCliente}: Segue sua nota fiscal ${notaFiscal.numero}`);
  }
  
}