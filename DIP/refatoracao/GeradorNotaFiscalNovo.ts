import NotaFiscal from '../entities/NotaFiscal';
import IAcaoAposGerarNota from '../interfaces/IAcaoAposGerarNota';
export default class GeradorNotaFiscalNovo{
  
  private listaAcoesAposGeracao: Array<IAcaoAposGerarNota>;

  public adicionarAcao(acao:IAcaoAposGerarNota){
    if (!this.listaAcoesAposGeracao)
      this.listaAcoesAposGeracao = new Array<IAcaoAposGerarNota>();
     
    this.listaAcoesAposGeracao.push(acao);
  }
  
  public gerarNota(){
    console.log('DIP REFATORADO');
    const novaNota = new NotaFiscal();

    novaNota.numero=10;
    novaNota.valor=100;
    novaNota.emailCliente='cliente@brasil.com';

    this.listaAcoesAposGeracao.forEach(acao => {
      acao.executar(novaNota);
    });

  }



}