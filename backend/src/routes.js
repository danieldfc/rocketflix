import { Router } from 'express';
import multer from 'multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';

import authMiddleware from './app/middlewares/auth';

import ValidatorsUserStore from './app/validators/User/Store';
import ValidatorsUserUpdate from './app/validators/User/Update';
import ValidatorsSessionStore from './app/validators/Session/Store';

import multerConfig from './config/multer';

const routes = Router();
const upload = multer(multerConfig);

routes.post('/users', ValidatorsUserStore, UserController.store);
routes.post('/sessions', ValidatorsSessionStore, SessionController.store);

routes.use(authMiddleware);

routes.put('/users', ValidatorsUserUpdate, UserController.update);
routes.post('/files', upload.single('file'), FileController.store);

export default routes;
