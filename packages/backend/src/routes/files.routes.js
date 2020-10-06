import { Router } from 'express';

import multer from 'multer';

import multerConfig from '../config/multer';

import authMiddleware from '../app/middlewares/auth';

import FileController from '../app/controllers/FileController';

const upload = multer(multerConfig);

const fileRoutes = Router();

fileRoutes.post(
  '/',
  authMiddleware,
  upload.single('file'),
  FileController.store,
);

export default fileRoutes;
