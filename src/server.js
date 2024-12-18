import express from 'express';

import cors from 'cors';
import { env } from './utils/env.js';
import router from './routers/index.js';
import { errorHandler } from './middlewares/errorHandler.js';
import { notFoundHandler } from './middlewares/notFoundHandler.js';
import cookieParser from 'cookie-parser';
import { UPLOAD_DIR } from './constants/index.js';
import { swaggerDocs } from './middlewares/swaggerDocs.js';

const PORT = Number(env('PORT', 3000));
export const setupServer = () => {
  const app = express();
  app.use('/api-docs', swaggerDocs());
  app.use('/uploads', express.static(UPLOAD_DIR));
  app.use(cors());
  app.use(express.json());

  app.use(cookieParser());

  app.use((req, res, next) => {
    console.log(`Time: ${new Date().toLocaleString()}`);
    next();
  });
  app.get('/', (req, res) => {
    res.json({ message: 'Hello.' });
  });
  app.use(router);
  app.use('*', notFoundHandler);
  app.use(errorHandler);
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  });
};
