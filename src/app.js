import express from 'express';

import healthRouter from './routes/health-router.js';
import usersRouter from './routes/users-router.js';
import videosRouter from './routes/videos-router.js';

const getApp = () => {
  const app = express();

  app.use(express.json());
  
  app.use("/health", healthRouter());
  app.use("/users", usersRouter);
  app.use("/videos", videosRouter);

  // app.use(error);
  
  return app;
}

export default getApp;
