import {
  validateHeroRequest,
  validateHeroResponse,
} from '../models/hero-request-schema';
import { expressHandler } from './express-handler';
import { getHeroDetail } from '../services/Heroes/index';
import { graphQLHandler } from './graphql-handler';

async function getHeroHandler() {
  //   const priceRequest = validateHeroRequest(request.query);
  const heroResponse = await getHeroDetail();
  return heroResponse;
}

export const heroExpressController = {
  getHeroHandler: expressHandler({
    handler: getHeroHandler,
    validator: validateHeroResponse,
  }),
};
export const heroGraphqlResolver = {
  Query: {
    heroes: graphQLHandler({
      handler: getHeroHandler,
      validator: validateHeroResponse,
    }),
  },
  Mutation: {},
};
