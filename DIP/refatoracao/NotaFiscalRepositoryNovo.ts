import NotaFiscal from '../entities/NotaFiscal';
import IAcaoAposGerarNota from '../interfaces/IAcaoAposGerarNota';

export default class NotaFiscalRepositoryNovo implements IAcaoAposGerarNota {
  executar(notaFiscal: NotaFiscal): void {
    console.log(`[refatorado] persistindo..`);
  }
  
}