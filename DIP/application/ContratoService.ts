import EmailService from '../application/EmailService';
import Contrato from '../entities/Contrato';
import Estoque from '../entities/Estoque';
import Produto from '../entities/Produto';
import ContratoRepository from '../repositories/ContratoRepository';

export default class ContratoService {
  consolidar (contrato: Contrato){
                              
    console.log('consolidando..')

    const servicoEmail = new EmailService();
    servicoEmail.enviarEmail();

    const contratoRepository = new ContratoRepository();
    contratoRepository.salvar(contrato);

  }
}