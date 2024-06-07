import NotaFiscal  from '../entities/NotaFiscal';
export default interface IServicoEmail {
  executar(notaFiscal:NotaFiscal) : void
}