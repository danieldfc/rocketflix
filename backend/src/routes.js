import { Router } from 'express';

import UserController from './app/controllers/UserControllers';
import SessionController from './app/controllers/SessionController';

import authMiddleware from './app/middlewares/auth';

import ValidatorsUserStore from './app/validators/UserStore';
import ValidatorsUserUpdate from './app/validators/UserUpdate';
import ValidatorsSessionStore from './app/validators/SessionStore';

const routes = Router();

routes.post('/users', ValidatorsUserStore, UserController.store);
routes.post('/sessions', ValidatorsSessionStore, SessionController.store);

routes.use(authMiddleware);

routes.put('/users', ValidatorsUserUpdate, UserController.update);

export default routes;
