import { Router } from 'express';

import UserController from '../app/controllers/UserController';

import authMiddleware from '../app/middlewares/auth';

import {
  validatorUserStore,
  validatorUserUpdate,
} from '../app/validators/user';

const userRoutes = Router();

userRoutes.post('/', validatorUserStore, UserController.store);
userRoutes.put('/', authMiddleware, validatorUserUpdate, UserController.update);

export default userRoutes;
