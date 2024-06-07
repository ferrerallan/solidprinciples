import NotaFiscal from '../entities/NotaFiscal';
import INotaFiscalRepository from '../interfaces/INotaFiscalRepository';
export default class NotaFiscalRepositoryOracle implements INotaFiscalRepository{
  salvar(notaFiscal: NotaFiscal): void {
    console.log('persistindo Oracle..')
  }
}