import { getAllHeroes } from '../../data/hero';
export const getHeroDetail = async () => {
  const data = await getAllHeroes();
  return data;
};
