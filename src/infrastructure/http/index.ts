/* eslint-disable @typescript-eslint/no-unsafe-call */
import express, { Response, Request, NextFunction, Router } from 'express';
import http from 'http';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import { SERVER_PORT, NODE_ENV } from '../../config';
import { initLogger } from '../../utils';
import path from 'path';
import cors from 'cors';

const logger = initLogger(__filename);

export function bootstrapServer(apiV1: Router) {
  const app = express();

  app.set('trust proxy', 1);
  app.use(helmet({ contentSecurityPolicy: false }));

  app.use(
    cors({
      origin: 'http://localhost:5173',
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
      allowedHeaders: ['Content-Type', 'Authorization'],
      credentials: true,
    })
  );

  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
  });
  app.use((req, res, next) => {
    logger.info(req.headers);
    logger.info(`${req.method} ${req.url} ${JSON.stringify(req.body)}`);
    next();
  });

  app.use('/api/v1', apiV1);

  app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err) {
      return res.status(500).json({ erorr: err.message });
    }
    next();
  });

  app.use((req: Request, res: Response) => {
    return res.status(404).json({ message: 'not found: 404' });
  });

  const server = http.createServer(app);

  server.listen(SERVER_PORT, () => {
    const message = `ENV=${NODE_ENV.toUpperCase()} app running: ${SERVER_PORT}`;
    logger.info(message);
  });

  return server;
}
