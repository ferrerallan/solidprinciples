import NotaFiscal from '../entities/NotaFiscal';
import IServicoEmail from '../interfaces/IServicoEmail';
import INotaFiscalRepository from '../interfaces/INotaFiscalRepository';
import IConciliacaoERP from '../interfaces/IConciliacaoERP';

export default class GeradorNotaFiscal{
  public emailService:IServicoEmail;
  public repository:INotaFiscalRepository;
  public conciliacaoERP:IConciliacaoERP;

  constructor(
      emailService:IServicoEmail,
      repository:INotaFiscalRepository,
      conciliacaoERP:IConciliacaoERP
    ){
      this.conciliacaoERP = conciliacaoERP;
      this.emailService = emailService;
      this.repository = repository;
  }

  gerarNota(notaFiscal:NotaFiscal){
    console.log('LSP');    
    
    this.emailService.enviarEmail(notaFiscal);
    this.repository.salvar(notaFiscal);
    this.conciliacaoERP.integrar(notaFiscal);

  }
}