import NotaFiscal from "../../SRP/entities/NotaFiscal";

export default interface IServicoEmail {
  salvar(notaFiscal:NotaFiscal): void;
}