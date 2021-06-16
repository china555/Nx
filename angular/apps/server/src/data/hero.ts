import { heroModel } from './models/hero-model';
import { IHero } from './interface/herointerface';
export const getHeroByName = (name: string) => {
  return heroModel.findOne({ name: name }).lean();
};

export const addHero = (name: IHero) => {
  return heroModel.create(name).then((c) => (c ? c.toObject() : null));
};

export const getAllHeroes = async (): Promise<IHero[]> => {
  const heroResult = await heroModel.find({});
  return heroResult;
};
