import { Router } from 'express';

import usersRoutes from './users.routes';
import sessionsRoute from './sessions.routes';
import filesRoutes from './files.routes';
import videosRoute from './videos.routes';

const routes = Router();

routes.use('/users', usersRoutes);
routes.use('/sessions', sessionsRoute);
routes.use('/files', filesRoutes);
routes.use('/videos', videosRoute);

export default routes;
