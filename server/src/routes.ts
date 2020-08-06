import express from 'express';
import ClassesController from './controllers/classesController';
import ClassConnection from './controllers/connectionController';

const routes = express.Router();
const classesControllers = new ClassesController();
const classesConnections = new ClassConnection();

// GET: busca
//POST: cria 
//PUT: atualiza

//Request body: dados para criação ou atualização
//Route Params: vem no endereço da rquisição.
//query params: paginação, filtros oredenação.


routes.post('/classes',classesControllers.create);
routes.get('/classes',classesControllers.index);
routes.post('/connections',classesConnections.create);
routes.get('/connections',classesConnections.index);


export default routes;