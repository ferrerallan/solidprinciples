import NotaFiscal from "../entities/NotaFiscal";
import IServicoEmail from "../interfaces/IServicoEmail";

export default class EmailServiceV1 implements IServicoEmail{
  public enviarEmail(notaFiscal:NotaFiscal){
    console.log(`enviando email para ${notaFiscal.emailCliente}: Segue sua nota  ${notaFiscal.numero}`);
  }
}