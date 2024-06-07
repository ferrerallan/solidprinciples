import NotaFiscal from '../entities/NotaFiscal';
import INotaFiscalRepository from '../interfaces/INotaFiscalRepository';
export default class NotaFiscalRepositoryTXT implements INotaFiscalRepository{
  salvar(notaFiscal: NotaFiscal): void {
    console.log('persistindo no TXT..')
  }
}