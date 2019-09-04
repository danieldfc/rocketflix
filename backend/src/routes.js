import { Router } from 'express';

import UserController from './app/controllers/UserControllers';
import SessionController from './app/controllers/SessionController';

import ValidatorsUserStore from './app/validators/UserStore';
import ValidatorsSessionStore from './app/validators/SessionStore';

const routes = Router();

routes.post('/users', ValidatorsUserStore, UserController.store);
routes.post('/sessions', ValidatorsSessionStore, SessionController.store);

export default routes;
