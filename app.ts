import express, {Request, Response} from 'express';
import SRPController from './SRP/SRPController';
import DIPController from './DIP/DIPController';
import OCPController from './OCP/OCPController';

const app = express();

app.get("/srp",new SRPController().executar);
app.get("/dip",new DIPController().executar);
app.get("/ocp",new OCPController().executar);

//refatorado
app.get("/diprefatorado",new DIPController().executarRefatorado);
app.get("/srprefatorado",new SRPController().executarRefatorado);
app.get("/ocprefatorado",new OCPController().executarRefatorado);

app.listen(3333);
