import * as Joi from 'joi';

const heroDetailRequestSchema = Joi.object().keys({
  name: Joi.string().required(),
});

export const validateHeroRequest = async (data: string) => {
  try {
    const value: Promise<any> = await heroDetailRequestSchema.validateAsync(
      data
    );
    return value;
  } catch (err) {
    throw new err();
  }
};
