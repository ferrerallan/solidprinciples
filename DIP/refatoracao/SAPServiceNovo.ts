import NotaFiscal from '../entities/NotaFiscal';
import IAcaoAposGerarNota from '../interfaces/IAcaoAposGerarNota';

export default class SAPService implements IAcaoAposGerarNota {
  executar(notaFiscal: NotaFiscal): void {
    console.log(`[refatorado] integrando..`);
  }
  
}