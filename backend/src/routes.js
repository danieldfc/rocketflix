import { Router } from 'express';
import multer from 'multer';

import UserController from './app/controllers/UserControllers';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';

import authMiddleware from './app/middlewares/auth';

import ValidatorsUserStore from './app/validators/UserStore';
import ValidatorsUserUpdate from './app/validators/UserUpdate';
import ValidatorsSessionStore from './app/validators/SessionStore';

import multerConfig from './config/multer';

const routes = Router();
const upload = multer(multerConfig);

routes.post('/users', ValidatorsUserStore, UserController.store);
routes.post('/sessions', ValidatorsSessionStore, SessionController.store);

routes.use(authMiddleware);

routes.put('/users', ValidatorsUserUpdate, UserController.update);
routes.post('/files', upload.single('file'), FileController.store);

export default routes;
