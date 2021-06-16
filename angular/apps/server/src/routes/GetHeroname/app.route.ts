import { Express } from 'express';
import { heroExpressController } from '../../controllers/herodetail-hanlder';
export const RouteHeroDetail = (app: Express) => {
  app.get('/herodetail', heroExpressController.getHeroHandler);
};
