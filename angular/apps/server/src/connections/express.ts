import { Express } from 'express';
import { environment } from '../environments/environment';
import * as cors from 'cors';

export const setupAppServerConnection = (app: Express) => {
  app.use(cors());
  const port = environment.port;
  const server = app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/api`);
  });
  server.on('error', console.error);
};
