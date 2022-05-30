import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type CertificationReceptionMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserDataMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TodoMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class CertificationReception {
  readonly id: string;
  readonly user_id?: number | null;
  readonly application_type?: number | null;
  readonly applied_at?: string | null;
  readonly file_path?: string | null;
  readonly userdataID: string;
  readonly certification_reception_id?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<CertificationReception, CertificationReceptionMetaData>);
  static copyOf(source: CertificationReception, mutator: (draft: MutableModel<CertificationReception, CertificationReceptionMetaData>) => MutableModel<CertificationReception, CertificationReceptionMetaData> | void): CertificationReception;
}

export declare class UserData {
  readonly id: string;
  readonly user_status?: number | null;
  readonly user_name?: string | null;
  readonly CertificationReceptions?: (CertificationReception | null)[] | null;
  readonly user_id?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<UserData, UserDataMetaData>);
  static copyOf(source: UserData, mutator: (draft: MutableModel<UserData, UserDataMetaData>) => MutableModel<UserData, UserDataMetaData> | void): UserData;
}

export declare class Todo {
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Todo, TodoMetaData>);
  static copyOf(source: Todo, mutator: (draft: MutableModel<Todo, TodoMetaData>) => MutableModel<Todo, TodoMetaData> | void): Todo;
}