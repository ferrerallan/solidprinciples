import EmailService from '../application/EmailService';

export default class ServicoEmailFactory{
  create (){
    return new EmailService();
  }
}