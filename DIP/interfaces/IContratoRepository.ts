import Contrato from "../../SRP/entities/Contrato";

export default interface IContratoRepository {
  salvar(contrato: Contrato) : void
}