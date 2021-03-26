import ContratoRepository from '../repositories/ContratoRepository';

export default class ContratoRepositoryFactory{
  create (){
    return new ContratoRepository();
  }
}