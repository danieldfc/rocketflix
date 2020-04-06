import { Router } from 'express';

import multer from 'multer';

import FileController from './app/controllers/FileController';
import SessionController from './app/controllers/SessionController';
import UserController from './app/controllers/UserController';
import VideoController from './app/controllers/VideoController';

import authMiddleware from './app/middlewares/auth';
import validateMiniatureId from './app/middlewares/validate-miniature-id';

import { validatorSessionStore } from './app/validators/session';
import { validatorUserStore, validatorUserUpdate } from './app/validators/user';
import { validatorVideoStore } from './app/validators/video';

import multerConfig from './config/multer';

const routes = Router();

const upload = multer(multerConfig);

routes.post('/users', validatorUserStore, UserController.store);
routes.post('/sessions', validatorSessionStore, SessionController.store);

routes.use(authMiddleware);

routes.put('/users', validatorUserUpdate, UserController.update);
routes.post('/files', upload.single('file'), FileController.store);

routes.get('/videos', VideoController.index);
routes.post(
  '/videos',
  validateMiniatureId,
  validatorVideoStore,
  VideoController.store
);
routes.put('/videos/:id', validateMiniatureId, VideoController.update);

export default routes;
