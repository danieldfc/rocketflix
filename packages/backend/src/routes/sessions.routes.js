import { Router } from 'express';

import SessionController from '../app/controllers/SessionController';

import { validatorSessionStore } from '../app/validators/session';

const sessionsRoute = Router();

sessionsRoute.post('/', validatorSessionStore, SessionController.store);

export default sessionsRoute;
