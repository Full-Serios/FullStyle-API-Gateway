// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace FsMsAuTypes {
  export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: { input: string; output: string; }
  /** The `Boolean` scalar type represents `true` or `false`. */
  Boolean: { input: boolean; output: boolean; }
  /** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A field whose value conforms to the standard internet email address format as specified in HTML Spec: https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address. */
  EmailAddress: { input: string; output: string; }
  /** Represents date values */
  Date: { input: string; output: string; }
  ObjMap: { input: any; output: any; }
};

export type Query = {
  dummy?: Maybe<Scalars['String']['output']>;
};

export type Mutation = {
  /** Autentica un usuario y retorna un token JWT */
  post_api_login?: Maybe<post_api_login_response>;
  /** Registra un nuevo manager en el sistema */
  post_api_manager_register?: Maybe<post_api_manager_register_response>;
  /** Registra un nuevo usuario en el sistema */
  post_api_register?: Maybe<post_api_register_response>;
};


export type Mutationpost_api_loginArgs = {
  input: models_LoginRequest_Input;
};


export type Mutationpost_api_manager_registerArgs = {
  input: models_RegisterManagerRequest_Input;
};


export type Mutationpost_api_registerArgs = {
  input: models_RegisterUserRequest_Input;
};

export type post_api_login_response = models_LoginResponse | models_ErrorResponse;

export type models_LoginResponse = {
  message?: Maybe<Scalars['String']['output']>;
  token?: Maybe<Scalars['String']['output']>;
  user?: Maybe<models_UserResponse>;
};

export type models_UserResponse = {
  email?: Maybe<Scalars['EmailAddress']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type models_ErrorResponse = {
  error?: Maybe<Scalars['String']['output']>;
};

/** Credenciales de acceso */
export type models_LoginRequest_Input = {
  email?: InputMaybe<Scalars['EmailAddress']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
};

export type post_api_manager_register_response = models_RegisterUserResponse | models_ErrorResponse;

export type models_RegisterUserResponse = {
  message?: Maybe<Scalars['String']['output']>;
  user?: Maybe<models_UserResponse>;
};

/** Información del manager */
export type models_RegisterManagerRequest_Input = {
  accounttype?: InputMaybe<Scalars['String']['input']>;
  bankaccount?: InputMaybe<Scalars['Int']['input']>;
  bankentity?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['EmailAddress']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  subscriptionactive?: InputMaybe<Scalars['Boolean']['input']>;
  subscriptionfinishdate?: InputMaybe<Scalars['Date']['input']>;
  subscriptionstartdate?: InputMaybe<Scalars['Date']['input']>;
  subscriptiontype?: InputMaybe<Scalars['String']['input']>;
};

export type post_api_register_response = models_RegisterUserResponse | models_ErrorResponse;

/** Información del usuario */
export type models_RegisterUserRequest_Input = {
  email?: InputMaybe<Scalars['EmailAddress']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
};

export type HTTPMethod =
  | 'GET'
  | 'HEAD'
  | 'POST'
  | 'PUT'
  | 'DELETE'
  | 'CONNECT'
  | 'OPTIONS'
  | 'TRACE'
  | 'PATCH';

  export type QuerySdk = {
      /** undefined **/
  dummy: InContextSdkMethod<Query['dummy'], {}, MeshContext>
  };

  export type MutationSdk = {
      /** Autentica un usuario y retorna un token JWT **/
  post_api_login: InContextSdkMethod<models_LoginResponse | models_ErrorResponse, Mutationpost_api_loginArgs, MeshContext>,
  /** Registra un nuevo manager en el sistema **/
  post_api_manager_register: InContextSdkMethod<models_RegisterUserResponse | models_ErrorResponse, Mutationpost_api_manager_registerArgs, MeshContext>,
  /** Registra un nuevo usuario en el sistema **/
  post_api_register: InContextSdkMethod<models_RegisterUserResponse | models_ErrorResponse, Mutationpost_api_registerArgs, MeshContext>
  };

  export type SubscriptionSdk = {
    
  };

  export type Context = {
      ["fs_ms_au"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
