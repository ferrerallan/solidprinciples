import NotaFiscal from '../entities/NotaFiscal';
import IServicoEmail from '../interfaces/IServicoEmail';
import INotaFiscalRepository from '../interfaces/INotaFiscalRepository';
import IConciliacaoERP from '../interfaces/IConciliacaoERP';


export default class GeradorNotaFiscalRefatorado{
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

  gerarNota(){
    console.log('OCP REFATORADO');
    const novaNota = new NotaFiscal();

    novaNota.numero=10;
    novaNota.valor=100;
    novaNota.emailCliente='cliente@brasil.com';
    
    this.emailService.enviarEmail(novaNota);
    this.repository.salvar(novaNota);
    this.conciliacaoERP.integrar(novaNota);

  }
}