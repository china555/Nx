import { connect, connection } from 'mongoose';
import { environment } from '../environments/environment';

export const connectMongoose = async (): Promise<void> => {
  const uri = environment.mongodb;
  await connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
  connection.on('error', (err) =>
    console.log('MongoDB connection error:', err)
  );
};
