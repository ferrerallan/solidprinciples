import IConciliacaoERP from "../interfaces/IConciliacaoERP";

export default class SAPService implements IConciliacaoERP{
  public integrar(){
    console.log('integrando SAP...');
  }
}