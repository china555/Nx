import { graphQLErrorHandler } from './graphql-error-handler';

export const graphQLHandler = ({ handler, validator }) => async (
  parent: any,
  args: any,
  context: any
) => {
  try {
    const returnValue = await handler(parent, args, context);
    const validate = await validator(returnValue);
    return validate;
  } catch (err) {
    console.log('err ::::::::::>>> ', err);
    graphQLErrorHandler(err);
  }
};
