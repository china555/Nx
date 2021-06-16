import { heroTypeDefs } from './schema/index';
import { merge } from 'lodash';
import { heroGraphqlResolver } from '../controllers/herodetail-hanlder';
export const resolvers = merge(heroGraphqlResolver);

export const typeDefs = [heroTypeDefs];
