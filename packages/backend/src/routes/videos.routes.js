import { Router } from 'express';

import VideoController from '../app/controllers/VideoController';

import authMiddleware from '../app/middlewares/auth';
import validateMiniatureId from '../app/middlewares/validate-miniature-id';

import { validatorVideoStore } from '../app/validators/video';

const videosRoute = Router();

videosRoute.use(authMiddleware);

videosRoute.get('/', VideoController.index);
videosRoute.post(
  '/',
  validateMiniatureId,
  validatorVideoStore,
  VideoController.store,
);
videosRoute.put('/:id', validateMiniatureId, VideoController.update);
videosRoute.delete('/:id', VideoController.delete);

export default videosRoute;
