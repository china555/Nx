import { Schema, model } from 'mongoose';
import { IHero } from '../interface/herointerface';

const heroSchema = new Schema<IHero>({
  name: String,
});

export const heroModel = model<IHero>('heros', heroSchema);
