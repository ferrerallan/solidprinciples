import NotaFiscal from "../entities/NotaFiscal";

export default interface IServicoEmail {
  enviarEmail(notaFiscal:NotaFiscal): void;
}