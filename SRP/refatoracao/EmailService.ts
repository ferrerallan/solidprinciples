import NotaFiscal from "../entities/NotaFiscal";

export default class EmailService{
  public enviarEmail(notaFiscal:NotaFiscal){
    console.log(`[refatorado] enviando email para ${notaFiscal.emailCliente}: Segue sua nota  ${notaFiscal.numero}`);
  }
}