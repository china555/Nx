import { connectMongoose } from './mongoDB';

export async function setup(): Promise<void> {
  await connectMongoose();
}
