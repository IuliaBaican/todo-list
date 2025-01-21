import { MongoClient } from 'mongodb';

export const removeUnset = <TObj extends object>(obj: TObj) => {
  return Object.keys(obj).reduce((accObj: Partial<TObj>, k: string) => {
    const key = k as keyof TObj;

    if (obj[key] === undefined || obj[key] === null) {
      return accObj;
    }

    return {
      ...accObj,
      [key]: obj[key],
    };
  }, {});
};

const { DB_NAME, DB_HOST } = process.env;
const uri = `mongodb://${DB_HOST}:27017/todo_list`;
const client = new MongoClient(uri);

export const makeDb = async () => {
  try {
    await client.connect();
    console.log('Connected successfully to MongoDB');
    return client.db(DB_NAME);
  } catch (error) {
    console.error('Failed to connect to MongoDB', error);
    throw error;
  }
};
