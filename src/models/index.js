// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { CertificationReception, UserData, Todo } = initSchema(schema);

export {
  CertificationReception,
  UserData,
  Todo
};