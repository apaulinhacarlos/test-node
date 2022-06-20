import express from 'express';

export default () => {
  const router = express.Router();

  router.get('/', () => console.log('xablau videos'));

  return router;
}