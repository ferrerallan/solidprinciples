import NotaFiscal from "../../SRP/entities/NotaFiscal";

export default interface IConciliacaoERP {
  integrar(notaFiscal:NotaFiscal): void;
}