import { Router } from 'express';

import multer from 'multer';

import FileController from './app/controllers/FileController';
import SessionController from './app/controllers/SessionController';
import UserController from './app/controllers/UserController';
import VideoController from './app/controllers/VideoController';

import authMiddleware from './app/middlewares/auth';

import ValidatorsSessionStore from './app/validators/Session/Store';
import ValidatorsUserStore from './app/validators/User/Store';
import ValidatorsUserUpdate from './app/validators/User/Update';
import ValidatorsVideoStore from './app/validators/Video/Store';

import multerConfig from './config/multer';

const routes = Router();

const upload = multer(multerConfig);

routes.post('/users', ValidatorsUserStore, UserController.store);
routes.post('/sessions', ValidatorsSessionStore, SessionController.store);

routes.use(authMiddleware);

routes.put('/users', ValidatorsUserUpdate, UserController.update);
routes.post('/files', upload.single('file'), FileController.store);

routes.get('/videos', VideoController.index);
routes.post('/videos', ValidatorsVideoStore, VideoController.store);

export default routes;
