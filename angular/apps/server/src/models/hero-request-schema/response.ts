import * as Joi from 'joi';

const heroDetailRequestSchema = Joi.object().keys({
  name: Joi.string().required(),
});

export const validateHeroResponse = (data) => {
  // try {
  //   const value = heroDetailRequestSchema.validateAsync(data);
  //   return value;
  // } catch (err) {
  //   throw new err();
  // }
  return data;
};
