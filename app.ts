import express, {Request, Response} from 'express';
import SRPController from './SRP/SRPController';
import DIPController from './DIP/DIPController';

const app = express();

app.get("/srp",new SRPController().executar);
app.get("/dip",new DIPController().executar);

app.listen(3333);
