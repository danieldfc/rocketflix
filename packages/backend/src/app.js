import './bootstrap';

import express from 'express';

import * as Sentry from '@sentry/node';
import cors from 'cors';
import { resolve } from 'path';
import Youch from 'youch';

import 'express-async-errors';

import sentryConfig from './config/sentry';

import routes from './routes';

import './database';

class App {
  constructor() {
    this.server = express();

    Sentry.init(sentryConfig);

    this.middlewares();
    this.routes();
    this.exceptionHandler();
  }

  middlewares() {
    this.server.use(Sentry.Handlers.requestHandler());
    this.server.use(cors());
    this.server.use(express.json());
    this.server.use(
      '/files',
      express.static(resolve(__dirname, '..', 'tmp', 'uploads')),
    );
  }

  routes() {
    this.server.use(routes);
    this.server.use(Sentry.Handlers.errorHandler());
  }

  exceptionHandler() {
    this.server.use(async (err, req, res, _) => {
      const errors = await new Youch(err, req).toJSON();
      if (process.env.NODE_ENV === 'development') {
        return res
          .status(500)
          .json({ error: { message: 'Internal server error.' } });
      }
      return res.status(500).json(errors);
    });
  }
}

export default new App().server;
