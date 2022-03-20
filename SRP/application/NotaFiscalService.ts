import NotaFiscal from "../entities/NotaFiscal";

export default class NotaFiscalService {
  public enviarEmail(notaFiscal:NotaFiscal){
    console.log(`enviando email para ${notaFiscal.emailCliente}: Segue sua nota fiscal ${notaFiscal.numero}`);
  }

  public integarSAP(notaFiscal:NotaFiscal){
    console.log('integrando SAP..');
  }

  public salvar(notaFiscal:NotaFiscal){
    console.log('persistindo..')
  }
}