// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace FsMsCbTypes {
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
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  ObjMap: { input: any; output: any; }
};

export type Query = {
  dummy?: Maybe<Scalars['String']['output']>;
};

export type Mutation = {
  /** Receives a user message, processes it with the Langchain agent via LLMService, and returns the agent's reply. */
  post_send?: Maybe<post_send_response>;
};


export type Mutationpost_sendArgs = {
  input?: InputMaybe<ChatRequest_Input>;
};

export type post_send_response = ChatResponse | post_send_400_response | post_send_500_response;

export type ChatResponse = {
  /** The agent's reply. */
  reply?: Maybe<Scalars['String']['output']>;
  /** The session ID. */
  session_id?: Maybe<Scalars['String']['output']>;
};

export type post_send_400_response = {
  detail?: Maybe<Scalars['String']['output']>;
};

export type post_send_500_response = {
  detail?: Maybe<Scalars['String']['output']>;
};

export type ChatRequest_Input = {
  /** The user's message. */
  message: Scalars['String']['input'];
  /** The session ID to maintain conversation context. */
  session_id?: InputMaybe<Scalars['String']['input']>;
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
      /** Receives a user message, processes it with the Langchain agent via LLMService, and returns the agent's reply. **/
  post_send: InContextSdkMethod<ChatResponse | post_send_400_response | post_send_500_response, Mutationpost_sendArgs, MeshContext>
  };

  export type SubscriptionSdk = {
    
  };

  export type Context = {
      ["fs_ms_cb"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
