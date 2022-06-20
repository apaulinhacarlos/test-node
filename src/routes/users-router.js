import express from 'express';
import userController from '../controllers/user-controller.js'

export default () => {
  const router = express.Router();

  // router.get('/', () => console.log('xablau users'));
  router.get('/', userController);

  return router;
}