import NotaFiscal from "../entities/NotaFiscal";

export default class EmailService{
  public enviarEmail(notaFiscal:NotaFiscal){
    console.log(`enviando email para ${notaFiscal.emailCliente}: Segue sua nota  ${notaFiscal.numero}`);
  }
}