// @ts-nocheck
import { GraphQLResolveInfo, SelectionSetNode, FieldNode, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import type { GetMeshOptions } from '@graphql-mesh/runtime';
import type { YamlConfig } from '@graphql-mesh/types';
import { defaultImportFn, handleImport } from '@graphql-mesh/utils';
import { PubSub } from '@graphql-mesh/utils';
import { DefaultLogger } from '@graphql-mesh/utils';
import type { MeshResolvedSource } from '@graphql-mesh/runtime';
import type { MeshTransform, MeshPlugin } from '@graphql-mesh/types';
import { createMeshHTTPHandler, MeshHTTPHandler } from '@graphql-mesh/http';
import { getMesh, type ExecuteMeshFn, type SubscribeMeshFn, type MeshContext as BaseMeshContext, type MeshInstance } from '@graphql-mesh/runtime';
import { MeshStore, FsStoreStorageAdapter } from '@graphql-mesh/store';
import { path as pathModule } from '@graphql-mesh/cross-helpers';
import type { ImportFn } from '@graphql-mesh/types';
import type { FsMsAuTypes } from './sources/fs_ms_au/types';
import type { FsMsLcTypes } from './sources/fs_ms_lc/types';
import type { FsMsCbTypes } from './sources/fs_ms_cb/types';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };



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
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: { input: Date | string; output: Date | string; }
  /** A field whose value conforms to the standard URL format as specified in RFC3986: https://www.ietf.org/rfc/rfc3986.txt. */
  URL: { input: URL | string; output: URL | string; }
  /** A time string at UTC, such as 10:15:30Z, compliant with the `full-time` format outlined in section 5.6 of the RFC 3339profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Time: { input: Date | string; output: Date | string; }
};

export type Query = {
  dummy?: Maybe<Scalars['String']['output']>;
  /** Obtiene la información de un usuario específico */
  user_by_id?: Maybe<user_by_id_200_response>;
  /** Obtiene la lista de sitios filtrados por los parámetros proporcionados */
  site?: Maybe<Array<Maybe<query_site_items>>>;
  /** Obtiene la lista de las categorías por sitio */
  site_has_category?: Maybe<Scalars['JSON']['output']>;
  /** Obtiene la lista de citas filtradas por los parámetros proporcionados */
  appointment?: Maybe<Array<Maybe<query_appointment_items>>>;
  /** Obtiene detalles adicionales de las citas */
  appointmentdetail?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  /** Obtiene estadísticas de citas agrupadas por trabajador */
  appointment_worker_statistics?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  /** Obtiene estadísticas de citas agrupadas por sitio */
  appointment_site_statistics?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  /** Obtiene estadísticas de citas agrupadas por servicio */
  appointment_service_statistics?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  /** Obtiene la lista de servicios filtrados por los parámetros proporcionados */
  service?: Maybe<Array<Maybe<query_service_items>>>;
  /** Obtiene la lista de todas las categorías */
  category?: Maybe<Array<Maybe<query_category_items>>>;
  /** Obtiene la lista de trabajadores filtrados por los parámetros proporcionados */
  worker?: Maybe<Array<Maybe<query_worker_items>>>;
  /** Obtiene el horario semanal de un trabajador específico */
  worker_weekly_schedule?: Maybe<Scalars['JSON']['output']>;
  /** Obtiene el horario diario de un trabajador específico */
  worker_daily_schedule?: Maybe<Scalars['JSON']['output']>;
  /** Obtiene la lista de los servicios por trabajador */
  worker_has_service?: Maybe<Scalars['JSON']['output']>;
  /** Obtiene la información de suscripción de un administrador */
  subscription_by_id?: Maybe<subscription_by_id_response>;
  /** Obtiene la lista de notificaciones filtradas por los parámetros proporcionados */
  notification?: Maybe<Array<Maybe<notification_response>>>;
  /** Obtiene la lista de pagos filtrados por los parámetros proporcionados */
  payment?: Maybe<Array<Maybe<payment_response>>>;
  /** Obtiene estadísticas de pagos agrupadas por trabajador */
  payment_worker_statistics?: Maybe<payment_worker_statistics_response>;
  /** Obtiene estadísticas de pagos agrupadas por sitio */
  payment_site_statistics?: Maybe<payment_site_statistics_response>;
  /** Obtiene estadísticas de pagos agrupadas por servicio */
  payment_service_statistics?: Maybe<payment_service_statistics_response>;
  /** Obtiene los detalles de servicios filtrados por los parámetros proporcionados */
  detail?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  /** Obtiene la disponibilidad filtrada por los parámetros proporcionados */
  availability?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  /** Obtiene los días libres filtrados por los parámetros proporcionados */
  days_off?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
};


export type Queryuser_by_idArgs = {
  id: Scalars['Int']['input'];
};


export type QuerysiteArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  address?: InputMaybe<Scalars['String']['input']>;
  manager_id?: InputMaybe<Scalars['Int']['input']>;
  category_id?: InputMaybe<Scalars['Int']['input']>;
  service_id?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryappointmentArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  worker_id?: InputMaybe<Scalars['Int']['input']>;
  site_id?: InputMaybe<Scalars['Int']['input']>;
  service_id?: InputMaybe<Scalars['Int']['input']>;
  client_id?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryappointmentdetailArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  worker_id?: InputMaybe<Scalars['Int']['input']>;
  site_id?: InputMaybe<Scalars['Int']['input']>;
  service_id?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  client_id?: InputMaybe<Scalars['Int']['input']>;
};


export type Queryappointment_worker_statisticsArgs = {
  site_id?: InputMaybe<Scalars['Int']['input']>;
  period?: InputMaybe<Scalars['String']['input']>;
  count_periods?: InputMaybe<Scalars['Int']['input']>;
};


export type Queryappointment_site_statisticsArgs = {
  site_id?: InputMaybe<Scalars['Int']['input']>;
  period?: InputMaybe<Scalars['String']['input']>;
  count_periods?: InputMaybe<Scalars['Int']['input']>;
};


export type Queryappointment_service_statisticsArgs = {
  site_id?: InputMaybe<Scalars['Int']['input']>;
  period?: InputMaybe<Scalars['String']['input']>;
  count_periods?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryserviceArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  category_id?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryworkerArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  site_id?: InputMaybe<Scalars['Int']['input']>;
  service_id?: InputMaybe<Scalars['Int']['input']>;
};


export type Queryworker_weekly_scheduleArgs = {
  worker_id: Scalars['Int']['input'];
};


export type Queryworker_daily_scheduleArgs = {
  worker_id: Scalars['Int']['input'];
  date: Scalars['Date']['input'];
};


export type Querysubscription_by_idArgs = {
  id: Scalars['Int']['input'];
};


export type QuerynotificationArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  appointment_id?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  worker_id?: InputMaybe<Scalars['Int']['input']>;
  service_id?: InputMaybe<Scalars['Int']['input']>;
  site_id?: InputMaybe<Scalars['Int']['input']>;
};


export type QuerypaymentArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  appointment_id?: InputMaybe<Scalars['Int']['input']>;
  amount?: InputMaybe<Scalars['Int']['input']>;
  paymentmethod?: InputMaybe<Scalars['String']['input']>;
  worker_id?: InputMaybe<Scalars['Int']['input']>;
  service_id?: InputMaybe<Scalars['Int']['input']>;
  site_id?: InputMaybe<Scalars['Int']['input']>;
};


export type Querypayment_worker_statisticsArgs = {
  site_id: Scalars['Int']['input'];
  period?: InputMaybe<Scalars['String']['input']>;
  count_periods?: InputMaybe<Scalars['Int']['input']>;
};


export type Querypayment_site_statisticsArgs = {
  site_id: Scalars['Int']['input'];
  period?: InputMaybe<Scalars['String']['input']>;
  count_periods?: InputMaybe<Scalars['Int']['input']>;
};


export type Querypayment_service_statisticsArgs = {
  site_id: Scalars['Int']['input'];
  period?: InputMaybe<Scalars['String']['input']>;
  count_periods?: InputMaybe<Scalars['Int']['input']>;
};


export type QuerydetailArgs = {
  site_id?: InputMaybe<Scalars['Int']['input']>;
  service_id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Int']['input']>;
  category_id?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryavailabilityArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  worker_id?: InputMaybe<Scalars['Int']['input']>;
  weekday?: InputMaybe<Scalars['String']['input']>;
};


export type Querydays_offArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  worker_id?: InputMaybe<Scalars['Int']['input']>;
  dayoff?: InputMaybe<Scalars['Date']['input']>;
};

export type Mutation = {
  /** Autentica un usuario y retorna un token JWT */
  post_api_login?: Maybe<post_api_login_response>;
  /** Registra un nuevo manager en el sistema */
  post_api_manager_register?: Maybe<post_api_manager_register_response>;
  /** Registra un nuevo usuario en el sistema */
  post_api_register?: Maybe<post_api_register_response>;
  /** Permite a un usuario iniciar sesión */
  post_login?: Maybe<post_login_200_response>;
  /** Permite registrar un nuevo usuario en el sistema */
  post_register?: Maybe<post_register_201_response>;
  /** Permite registrar un nuevo administrador en el sistema */
  post_manager_register?: Maybe<post_manager_register_201_response>;
  /** Permite a un usuario cerrar sesión en el sistema */
  post_logout?: Maybe<post_logout_200_response>;
  /** Permite registrar un nuevo usuario utilizando la cuenta de Google */
  post_register_google?: Maybe<post_register_google_201_response>;
  /** Permite iniciar sesión utilizando la cuenta de Google */
  post_login_google?: Maybe<post_login_google_200_response>;
  /** Permite habilitar la autenticación de dos factores para un usuario */
  post_enable_2fa?: Maybe<post_enable_2fa_200_response>;
  /** Permite verificar un código de autenticación de dos factores */
  post_verify_2fa?: Maybe<post_verify_2fa_200_response>;
  /** Actualiza la información de un usuario específico */
  put_user_by_id?: Maybe<put_user_by_id_200_response>;
  /** Elimina a un usuario específico */
  delete_user_by_id?: Maybe<delete_user_by_id_200_response>;
  /** Envía un correo electrónico con un enlace para restablecer la contraseña */
  post_user_reset_password_request?: Maybe<post_user_reset_password_request_200_response>;
  /** Restablece la contraseña del usuario utilizando el token proporcionado */
  post_user_reset_password?: Maybe<post_user_reset_password_200_response>;
  /** Crea un nuevo sitio */
  post_site?: Maybe<post_site_201_response>;
  /** Actualiza la información de un sitio existente */
  put_site?: Maybe<put_site_200_response>;
  /** Elimina un sitio existente */
  delete_site?: Maybe<delete_site_200_response>;
  /** Obtiene la lista de las categorías por sitio */
  post_site_has_category?: Maybe<Scalars['JSON']['output']>;
  /** Crea una nueva cita */
  post_appointment?: Maybe<post_appointment_201_response>;
  /** Actualiza la información de una cita existente */
  put_appointment?: Maybe<put_appointment_200_response>;
  /** Elimina una cita existente */
  delete_appointment?: Maybe<delete_appointment_200_response>;
  /** Crea un nuevo servicio */
  post_service?: Maybe<post_service_201_response>;
  /** Crea un nuevo trabajador */
  post_worker?: Maybe<post_worker_201_response>;
  /** Actualiza la información de un trabajador existente */
  put_worker?: Maybe<put_worker_200_response>;
  /** Elimina un trabajador existente */
  delete_worker?: Maybe<delete_worker_200_response>;
  /** Modifica los servicios por trabajador */
  post_worker_has_service?: Maybe<Scalars['JSON']['output']>;
  /** Actualiza la suscripción de un administrador */
  put_subscription_by_id?: Maybe<put_subscription_by_id_response>;
  /** Crea una nueva notificación */
  post_notification?: Maybe<post_notification_response>;
  /** Actualiza una notificación existente */
  put_notification?: Maybe<put_notification_response>;
  /** Elimina una notificación existente */
  delete_notification?: Maybe<delete_notification_response>;
  /** Crea un nuevo pago */
  post_payment?: Maybe<post_payment_response>;
  /** Actualiza un pago existente */
  put_payment?: Maybe<put_payment_response>;
  /** Elimina un pago existente */
  delete_payment?: Maybe<delete_payment_response>;
  /** Crea un nuevo servicio */
  post_detail?: Maybe<Scalars['JSON']['output']>;
  /** Actualiza una disponibilidad existente */
  put_detail?: Maybe<Scalars['JSON']['output']>;
  /** Elimina una disponibilidad existente */
  delete_detail?: Maybe<Scalars['JSON']['output']>;
  /** Crea una nueva disponibilidad */
  post_availability?: Maybe<Scalars['JSON']['output']>;
  /** Actualiza una disponibilidad existente */
  put_availability?: Maybe<Scalars['JSON']['output']>;
  /** Elimina una disponibilidad existente */
  delete_availability?: Maybe<Scalars['JSON']['output']>;
  /** Crea un nuevo día libre */
  post_days_off?: Maybe<Scalars['JSON']['output']>;
  /** Actualiza los días libres filtrados por los parámetros proporcionados */
  put_days_off?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  /** Elimina un día libre existente */
  delete_days_off?: Maybe<Scalars['JSON']['output']>;
  /** Receives a user message, processes it with the Langchain agent via LLMService, and returns the agent's reply. */
  post_send?: Maybe<post_send_response>;
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


export type Mutationpost_loginArgs = {
  input: post_login_request_Input;
};


export type Mutationpost_registerArgs = {
  input: post_register_request_Input;
};


export type Mutationpost_manager_registerArgs = {
  input: post_manager_register_request_Input;
};


export type Mutationpost_register_googleArgs = {
  input: post_register_google_request_Input;
};


export type Mutationpost_login_googleArgs = {
  input: post_login_google_request_Input;
};


export type Mutationpost_verify_2faArgs = {
  input: post_verify_2fa_request_Input;
};


export type Mutationput_user_by_idArgs = {
  id: Scalars['Int']['input'];
  input: put_user_by_id_request_Input;
};


export type Mutationdelete_user_by_idArgs = {
  id: Scalars['Int']['input'];
};


export type Mutationpost_user_reset_password_requestArgs = {
  input: post_user_reset_password_request_request_Input;
};


export type Mutationpost_user_reset_passwordArgs = {
  input: post_user_reset_password_request_Input;
};


export type Mutationpost_siteArgs = {
  input: post_site_request_Input;
};


export type Mutationput_siteArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  input: put_site_request_Input;
};


export type Mutationdelete_siteArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type Mutationpost_site_has_categoryArgs = {
  input: post_site_has_category_request_Input;
};


export type Mutationpost_appointmentArgs = {
  input: post_appointment_request_Input;
};


export type Mutationput_appointmentArgs = {
  id: Scalars['Int']['input'];
  input: put_appointment_request_Input;
};


export type Mutationdelete_appointmentArgs = {
  id: Scalars['Int']['input'];
};


export type Mutationpost_serviceArgs = {
  input: post_service_request_Input;
};


export type Mutationpost_workerArgs = {
  input: post_worker_request_Input;
};


export type Mutationput_workerArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  input: put_worker_request_Input;
};


export type Mutationdelete_workerArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type Mutationpost_worker_has_serviceArgs = {
  input: post_worker_has_service_request_Input;
};


export type Mutationput_subscription_by_idArgs = {
  id: Scalars['Int']['input'];
  input: put_subscription_by_id_request_Input;
};


export type Mutationpost_notificationArgs = {
  input: post_notification_request_Input;
};


export type Mutationput_notificationArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  input: put_notification_request_Input;
};


export type Mutationdelete_notificationArgs = {
  id: Scalars['Int']['input'];
};


export type Mutationpost_paymentArgs = {
  input: post_payment_request_Input;
};


export type Mutationput_paymentArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  input: put_payment_request_Input;
};


export type Mutationdelete_paymentArgs = {
  id: Scalars['Int']['input'];
};


export type Mutationpost_detailArgs = {
  input: post_detail_request_Input;
};


export type Mutationput_detailArgs = {
  site_id?: InputMaybe<Scalars['Int']['input']>;
  service_id?: InputMaybe<Scalars['Int']['input']>;
  input: put_detail_request_Input;
};


export type Mutationdelete_detailArgs = {
  site_id?: InputMaybe<Scalars['Int']['input']>;
  service_id?: InputMaybe<Scalars['Int']['input']>;
};


export type Mutationpost_availabilityArgs = {
  input: post_availability_request_Input;
};


export type Mutationput_availabilityArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  input: put_availability_request_Input;
};


export type Mutationdelete_availabilityArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type Mutationpost_days_offArgs = {
  input: post_days_off_request_Input;
};


export type Mutationput_days_offArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  input: put_days_off_request_Input;
};


export type Mutationdelete_days_offArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type Mutationpost_sendArgs = {
  input?: InputMaybe<ChatRequest_Input>;
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

export type user_by_id_200_response = {
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  active?: Maybe<Scalars['Boolean']['output']>;
};

export type query_site_items = {
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  address?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['Int']['output']>;
  manager_id?: Maybe<Scalars['Int']['output']>;
};

export type query_appointment_items = {
  id?: Maybe<Scalars['Int']['output']>;
  appointmenttime?: Maybe<Scalars['DateTime']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  worker_id?: Maybe<Scalars['Int']['output']>;
  site_id?: Maybe<Scalars['Int']['output']>;
  service_id?: Maybe<Scalars['Int']['output']>;
  client_id?: Maybe<Scalars['Int']['output']>;
};

export type query_service_items = {
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  category_id?: Maybe<Scalars['Int']['output']>;
};

export type query_category_items = {
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type query_worker_items = {
  id?: Maybe<Scalars['Int']['output']>;
  user_id?: Maybe<Scalars['Int']['output']>;
  site_id?: Maybe<Scalars['Int']['output']>;
};

export type subscription_by_id_response = subscription_by_id_200_response | subscription_by_id_404_response;

export type subscription_by_id_200_response = {
  id?: Maybe<Scalars['Int']['output']>;
  subscriptionactive?: Maybe<Scalars['Boolean']['output']>;
  subscriptionstartdate?: Maybe<Scalars['DateTime']['output']>;
  subscriptiontype?: Maybe<Scalars['String']['output']>;
  subscriptionfinishdate?: Maybe<Scalars['DateTime']['output']>;
};

export type subscription_by_id_404_response = {
  message?: Maybe<Scalars['String']['output']>;
};

export type notification_response = query_notification_oneOf_0_items | notification_404_response;

export type query_notification_oneOf_0_items = {
  id?: Maybe<Scalars['Int']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  appointment_id?: Maybe<Scalars['Int']['output']>;
  worker_id?: Maybe<Scalars['Int']['output']>;
  service_id?: Maybe<Scalars['Int']['output']>;
  site_id?: Maybe<Scalars['Int']['output']>;
};

export type notification_404_response = {
  message?: Maybe<Scalars['String']['output']>;
};

export type payment_response = query_payment_oneOf_0_items | payment_404_response;

export type query_payment_oneOf_0_items = {
  id?: Maybe<Scalars['Int']['output']>;
  amount?: Maybe<Scalars['Int']['output']>;
  paymentmethod?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  appointment_id?: Maybe<Scalars['Int']['output']>;
  worker_id?: Maybe<Scalars['Int']['output']>;
  service_id?: Maybe<Scalars['Int']['output']>;
  site_id?: Maybe<Scalars['Int']['output']>;
};

export type payment_404_response = {
  message?: Maybe<Scalars['String']['output']>;
};

export type payment_worker_statistics_response = payment_worker_statistics_200_response | payment_worker_statistics_400_response;

export type payment_worker_statistics_200_response = {
  site_id?: Maybe<Scalars['Int']['output']>;
  period?: Maybe<Scalars['String']['output']>;
  count_periods?: Maybe<Scalars['Int']['output']>;
  statistics?: Maybe<Array<Maybe<query_payment_worker_statistics_oneOf_0_statistics_items>>>;
};

export type query_payment_worker_statistics_oneOf_0_statistics_items = {
  worker_id?: Maybe<Scalars['Int']['output']>;
  total_amount?: Maybe<Scalars['Int']['output']>;
  day?: Maybe<Scalars['Date']['output']>;
  week_start?: Maybe<Scalars['Date']['output']>;
  year?: Maybe<Scalars['Int']['output']>;
  month?: Maybe<Scalars['Int']['output']>;
};

export type payment_worker_statistics_400_response = {
  message?: Maybe<Scalars['String']['output']>;
};

export type payment_site_statistics_response = payment_site_statistics_200_response | payment_site_statistics_400_response;

export type payment_site_statistics_200_response = {
  site_id?: Maybe<Scalars['Int']['output']>;
  period?: Maybe<Scalars['String']['output']>;
  count_periods?: Maybe<Scalars['Int']['output']>;
  statistics?: Maybe<Array<Maybe<query_payment_site_statistics_oneOf_0_statistics_items>>>;
};

export type query_payment_site_statistics_oneOf_0_statistics_items = {
  total_amount?: Maybe<Scalars['Int']['output']>;
  day?: Maybe<Scalars['Date']['output']>;
  week_start?: Maybe<Scalars['Date']['output']>;
  year?: Maybe<Scalars['Int']['output']>;
  month?: Maybe<Scalars['Int']['output']>;
};

export type payment_site_statistics_400_response = {
  message?: Maybe<Scalars['String']['output']>;
};

export type payment_service_statistics_response = payment_service_statistics_200_response | payment_service_statistics_400_response;

export type payment_service_statistics_200_response = {
  site_id?: Maybe<Scalars['Int']['output']>;
  period?: Maybe<Scalars['String']['output']>;
  count_periods?: Maybe<Scalars['Int']['output']>;
  statistics?: Maybe<Array<Maybe<query_payment_service_statistics_oneOf_0_statistics_items>>>;
};

export type query_payment_service_statistics_oneOf_0_statistics_items = {
  service_id?: Maybe<Scalars['Int']['output']>;
  total_amount?: Maybe<Scalars['Int']['output']>;
  day?: Maybe<Scalars['Date']['output']>;
  week_start?: Maybe<Scalars['Date']['output']>;
  year?: Maybe<Scalars['Int']['output']>;
  month?: Maybe<Scalars['Int']['output']>;
};

export type payment_service_statistics_400_response = {
  message?: Maybe<Scalars['String']['output']>;
};

export type post_login_200_response = {
  user?: Maybe<Scalars['JSON']['output']>;
  access_token?: Maybe<Scalars['String']['output']>;
  refresh_token?: Maybe<Scalars['String']['output']>;
  manager?: Maybe<Scalars['String']['output']>;
  subscription_active?: Maybe<Scalars['String']['output']>;
};

/** Credenciales del usuario */
export type post_login_request_Input = {
  email: Scalars['EmailAddress']['input'];
  password: Scalars['String']['input'];
};

export type post_register_201_response = {
  message?: Maybe<Scalars['String']['output']>;
  user?: Maybe<Scalars['JSON']['output']>;
};

/** Datos del nuevo usuario */
export type post_register_request_Input = {
  name: Scalars['String']['input'];
  email: Scalars['EmailAddress']['input'];
  password: Scalars['String']['input'];
};

export type post_manager_register_201_response = {
  message?: Maybe<Scalars['String']['output']>;
  user?: Maybe<Scalars['JSON']['output']>;
};

/** Datos del nuevo administrador */
export type post_manager_register_request_Input = {
  name: Scalars['String']['input'];
  email: Scalars['EmailAddress']['input'];
  password: Scalars['String']['input'];
};

export type post_logout_200_response = {
  message?: Maybe<Scalars['String']['output']>;
};

export type post_register_google_201_response = {
  message?: Maybe<Scalars['String']['output']>;
  user?: Maybe<Scalars['JSON']['output']>;
};

/** Token de autenticación de Google */
export type post_register_google_request_Input = {
  token: Scalars['String']['input'];
};

export type post_login_google_200_response = {
  access_token?: Maybe<Scalars['String']['output']>;
  refresh_token?: Maybe<Scalars['String']['output']>;
  user?: Maybe<Scalars['JSON']['output']>;
};

/** Token de autenticación de Google */
export type post_login_google_request_Input = {
  token: Scalars['String']['input'];
};

export type post_enable_2fa_200_response = {
  message?: Maybe<Scalars['String']['output']>;
  secret?: Maybe<Scalars['String']['output']>;
  uri?: Maybe<Scalars['String']['output']>;
};

export type post_verify_2fa_200_response = {
  message?: Maybe<Scalars['String']['output']>;
};

/** Código de verificación */
export type post_verify_2fa_request_Input = {
  token: Scalars['String']['input'];
};

export type put_user_by_id_200_response = {
  message?: Maybe<Scalars['String']['output']>;
};

/** Nueva información del usuario */
export type put_user_by_id_request_Input = {
  password?: InputMaybe<Scalars['String']['input']>;
};

export type delete_user_by_id_200_response = {
  message?: Maybe<Scalars['String']['output']>;
};

export type post_user_reset_password_request_200_response = {
  message?: Maybe<Scalars['String']['output']>;
};

/** Correo electrónico del usuario */
export type post_user_reset_password_request_request_Input = {
  email: Scalars['EmailAddress']['input'];
};

export type post_user_reset_password_200_response = {
  message?: Maybe<Scalars['String']['output']>;
};

/** Nueva contraseña y token de restablecimiento */
export type post_user_reset_password_request_Input = {
  token: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type post_site_201_response = {
  message?: Maybe<Scalars['String']['output']>;
  site?: Maybe<Scalars['JSON']['output']>;
};

/** Información del sitio */
export type post_site_request_Input = {
  name: Scalars['String']['input'];
  address: Scalars['String']['input'];
  phone: Scalars['Int']['input'];
  manager_id: Scalars['Int']['input'];
  category_id?: InputMaybe<Scalars['Int']['input']>;
  service_id?: InputMaybe<Scalars['Int']['input']>;
  photos?: InputMaybe<mutationInput_post_site_input_photos_Input>;
};

export type mutationInput_post_site_input_photos_Input = {
  photo1?: InputMaybe<Scalars['String']['input']>;
  photo2?: InputMaybe<Scalars['String']['input']>;
};

export type put_site_200_response = {
  message?: Maybe<Scalars['String']['output']>;
  site?: Maybe<Scalars['JSON']['output']>;
};

/** Nueva información del sitio */
export type put_site_request_Input = {
  name?: InputMaybe<Scalars['String']['input']>;
  address?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['Int']['input']>;
  manager_id?: InputMaybe<Scalars['Int']['input']>;
  photos?: InputMaybe<mutationInput_put_site_input_photos_Input>;
  id: Scalars['JSON']['input'];
};

export type mutationInput_put_site_input_photos_Input = {
  photo1?: InputMaybe<Scalars['String']['input']>;
  photo2?: InputMaybe<Scalars['String']['input']>;
};

export type delete_site_200_response = {
  message?: Maybe<Scalars['String']['output']>;
};

/** Información del sitio */
export type post_site_has_category_request_Input = {
  site_id?: InputMaybe<Scalars['Int']['input']>;
  category_id?: InputMaybe<Scalars['Int']['input']>;
};

export type post_appointment_201_response = {
  message?: Maybe<Scalars['String']['output']>;
  appointment?: Maybe<Scalars['JSON']['output']>;
};

/** Información de la cita */
export type post_appointment_request_Input = {
  appointmenttime: Scalars['DateTime']['input'];
  status?: InputMaybe<Scalars['String']['input']>;
  worker_id: Scalars['Int']['input'];
  site_id: Scalars['Int']['input'];
  service_id: Scalars['Int']['input'];
  client_id: Scalars['Int']['input'];
  request?: InputMaybe<Scalars['Boolean']['input']>;
};

export type put_appointment_200_response = {
  message?: Maybe<Scalars['String']['output']>;
  appointment?: Maybe<Scalars['JSON']['output']>;
};

/** Nueva información de la cita */
export type put_appointment_request_Input = {
  appointmenttime?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  worker_id?: InputMaybe<Scalars['Int']['input']>;
  site_id?: InputMaybe<Scalars['Int']['input']>;
  service_id?: InputMaybe<Scalars['Int']['input']>;
  client_id?: InputMaybe<Scalars['Int']['input']>;
};

export type delete_appointment_200_response = {
  message?: Maybe<Scalars['String']['output']>;
};

export type post_service_201_response = {
  message?: Maybe<Scalars['String']['output']>;
  service?: Maybe<Scalars['JSON']['output']>;
};

/** Información del servicio */
export type post_service_request_Input = {
  name: Scalars['String']['input'];
  category_id: Scalars['Int']['input'];
};

export type post_worker_201_response = {
  message?: Maybe<Scalars['String']['output']>;
  worker?: Maybe<Scalars['JSON']['output']>;
};

/** Información del trabajador */
export type post_worker_request_Input = {
  name?: InputMaybe<Scalars['String']['input']>;
  site_id?: InputMaybe<Scalars['Int']['input']>;
  profilepicture?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
};

export type put_worker_200_response = {
  message?: Maybe<Scalars['String']['output']>;
  worker?: Maybe<Scalars['JSON']['output']>;
};

/** Información del trabajador */
export type put_worker_request_Input = {
  name?: InputMaybe<Scalars['String']['input']>;
  site_id?: InputMaybe<Scalars['Int']['input']>;
  profilepicture?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
};

export type delete_worker_200_response = {
  message?: Maybe<Scalars['String']['output']>;
};

/** Información del sitio */
export type post_worker_has_service_request_Input = {
  worker_id?: InputMaybe<Scalars['Int']['input']>;
  service_id?: InputMaybe<Scalars['Int']['input']>;
};

export type put_subscription_by_id_response = put_subscription_by_id_200_response | put_subscription_by_id_400_response | put_subscription_by_id_404_response | put_subscription_by_id_500_response;

export type put_subscription_by_id_200_response = {
  manager?: Maybe<mutation_put_subscription_by_id_oneOf_0_manager>;
};

export type mutation_put_subscription_by_id_oneOf_0_manager = {
  id?: Maybe<Scalars['Int']['output']>;
  subscriptionactive?: Maybe<Scalars['Boolean']['output']>;
  subscriptionstartdate?: Maybe<Scalars['DateTime']['output']>;
  subscriptiontype?: Maybe<Scalars['String']['output']>;
  subscriptionfinishdate?: Maybe<Scalars['DateTime']['output']>;
};

export type put_subscription_by_id_400_response = {
  message?: Maybe<Scalars['String']['output']>;
};

export type put_subscription_by_id_404_response = {
  message?: Maybe<Scalars['String']['output']>;
};

export type put_subscription_by_id_500_response = {
  message?: Maybe<Scalars['String']['output']>;
};

/** Nueva información de la suscripción */
export type put_subscription_by_id_request_Input = {
  /** Estado de la suscripción (activa o inactiva) */
  subscriptionactive: Scalars['Boolean']['input'];
  /** Fecha de inicio de la suscripción (formato: YYYY-MM-DDThh:mm:ss) */
  subscriptionstartdate?: InputMaybe<Scalars['DateTime']['input']>;
  /** Tipo de suscripción (básica, premium, etc.) */
  subscriptiontype?: InputMaybe<Scalars['String']['input']>;
  /** Fecha de finalización de la suscripción (formato: YYYY-MM-DDThh:mm:ss) */
  subscriptionfinishdate?: InputMaybe<Scalars['DateTime']['input']>;
};

export type post_notification_response = JSON_container | post_notification_404_response | post_notification_500_response;

export type JSON_container = {
  JSON?: Maybe<Scalars['JSON']['output']>;
};

export type post_notification_404_response = {
  message?: Maybe<Scalars['String']['output']>;
};

export type post_notification_500_response = {
  message?: Maybe<Scalars['String']['output']>;
};

/** Información de la notificación */
export type post_notification_request_Input = {
  timestamp?: InputMaybe<Scalars['Int']['input']>;
  /** Tipo de notificación */
  type: Scalars['String']['input'];
  /** Estado de la notificación */
  status?: InputMaybe<Scalars['String']['input']>;
  /** ID de la cita asociada */
  appointment_id: Scalars['Int']['input'];
};

export type put_notification_response = JSON_container | put_notification_400_response | put_notification_404_response | put_notification_500_response;

export type put_notification_400_response = {
  message?: Maybe<Scalars['String']['output']>;
};

export type put_notification_404_response = {
  message?: Maybe<Scalars['String']['output']>;
};

export type put_notification_500_response = {
  message?: Maybe<Scalars['String']['output']>;
};

/** Nueva información de la notificación */
export type put_notification_request_Input = {
  timestamp?: InputMaybe<Scalars['Int']['input']>;
  /** Tipo de notificación */
  type?: InputMaybe<Scalars['String']['input']>;
  /** Estado de la notificación */
  status?: InputMaybe<Scalars['String']['input']>;
  /** ID de la cita asociada */
  appointment_id?: InputMaybe<Scalars['Int']['input']>;
};

export type delete_notification_response = delete_notification_200_response | delete_notification_400_response | delete_notification_404_response | delete_notification_500_response;

export type delete_notification_200_response = {
  message?: Maybe<Scalars['String']['output']>;
};

export type delete_notification_400_response = {
  message?: Maybe<Scalars['String']['output']>;
};

export type delete_notification_404_response = {
  message?: Maybe<Scalars['String']['output']>;
};

export type delete_notification_500_response = {
  message?: Maybe<Scalars['String']['output']>;
};

export type post_payment_response = JSON_container | post_payment_404_response | post_payment_500_response;

export type post_payment_404_response = {
  message?: Maybe<Scalars['String']['output']>;
};

export type post_payment_500_response = {
  message?: Maybe<Scalars['String']['output']>;
};

/** Información del pago */
export type post_payment_request_Input = {
  /** Monto del pago */
  amount?: InputMaybe<Scalars['Int']['input']>;
  /** Método de pago (efectivo, tarjeta, etc.) */
  paymentmethod?: InputMaybe<Scalars['String']['input']>;
  /** Estado del pago */
  status?: InputMaybe<Scalars['String']['input']>;
  /** ID de la cita asociada */
  appointment_id?: InputMaybe<Scalars['Int']['input']>;
};

export type put_payment_response = JSON_container | put_payment_400_response | put_payment_404_response | put_payment_500_response;

export type put_payment_400_response = {
  message?: Maybe<Scalars['String']['output']>;
};

export type put_payment_404_response = {
  message?: Maybe<Scalars['String']['output']>;
};

export type put_payment_500_response = {
  message?: Maybe<Scalars['String']['output']>;
};

/** Nueva información del pago */
export type put_payment_request_Input = {
  timestamp?: InputMaybe<Scalars['Int']['input']>;
  /** Monto del pago */
  amount?: InputMaybe<Scalars['Int']['input']>;
  /** Método de pago (efectivo, tarjeta, etc.) */
  paymentmethod?: InputMaybe<Scalars['String']['input']>;
  /** Estado del pago */
  status?: InputMaybe<Scalars['String']['input']>;
  /** ID de la cita asociada */
  appointment_id?: InputMaybe<Scalars['Int']['input']>;
};

export type delete_payment_response = delete_payment_200_response | delete_payment_400_response | delete_payment_404_response | delete_payment_500_response;

export type delete_payment_200_response = {
  message?: Maybe<Scalars['String']['output']>;
};

export type delete_payment_400_response = {
  message?: Maybe<Scalars['String']['output']>;
};

export type delete_payment_404_response = {
  message?: Maybe<Scalars['String']['output']>;
};

export type delete_payment_500_response = {
  message?: Maybe<Scalars['String']['output']>;
};

/** Información de disponibilidad */
export type post_detail_request_Input = {
  site_id?: InputMaybe<Scalars['Int']['input']>;
  service_id?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['String']['input']>;
  photos?: InputMaybe<mutationInput_post_detail_input_photos_Input>;
};

export type mutationInput_post_detail_input_photos_Input = {
  before?: InputMaybe<Scalars['URL']['input']>;
  after?: InputMaybe<Scalars['URL']['input']>;
};

/** Información de disponibilidad */
export type put_detail_request_Input = {
  site_id?: InputMaybe<Scalars['Int']['input']>;
  service_id?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['String']['input']>;
  photos?: InputMaybe<mutationInput_put_detail_input_photos_Input>;
};

export type mutationInput_put_detail_input_photos_Input = {
  before?: InputMaybe<Scalars['URL']['input']>;
  after?: InputMaybe<Scalars['URL']['input']>;
};

/** Información de disponibilidad */
export type post_availability_request_Input = {
  worker_id: Scalars['Int']['input'];
  weekday: Scalars['Int']['input'];
  starttime: Scalars['Time']['input'];
  endtime: Scalars['Time']['input'];
};

/** Nueva información de disponibilidad */
export type put_availability_request_Input = {
  worker_id?: InputMaybe<Scalars['Int']['input']>;
  weekday?: InputMaybe<Scalars['String']['input']>;
  starttime?: InputMaybe<Scalars['Time']['input']>;
  endtime?: InputMaybe<Scalars['Time']['input']>;
};

/** Información del día libre */
export type post_days_off_request_Input = {
  worker_id: Scalars['Int']['input'];
  dayoff: Scalars['Date']['input'];
};

/** Información del día libre */
export type put_days_off_request_Input = {
  worker_id: Scalars['Int']['input'];
  dayoff: Scalars['Date']['input'];
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

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string | ((fieldNode: FieldNode) => SelectionSetNode);
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping of union types */
export type ResolversUnionTypes<_RefType extends Record<string, unknown>> = ResolversObject<{
  post_api_login_response: ( models_LoginResponse ) | ( models_ErrorResponse );
  post_api_manager_register_response: ( models_RegisterUserResponse ) | ( models_ErrorResponse );
  post_api_register_response: ( models_RegisterUserResponse ) | ( models_ErrorResponse );
  subscription_by_id_response: ( subscription_by_id_200_response ) | ( subscription_by_id_404_response );
  notification_response: ( query_notification_oneOf_0_items ) | ( notification_404_response );
  payment_response: ( query_payment_oneOf_0_items ) | ( payment_404_response );
  payment_worker_statistics_response: ( payment_worker_statistics_200_response ) | ( payment_worker_statistics_400_response );
  payment_site_statistics_response: ( payment_site_statistics_200_response ) | ( payment_site_statistics_400_response );
  payment_service_statistics_response: ( payment_service_statistics_200_response ) | ( payment_service_statistics_400_response );
  put_subscription_by_id_response: ( put_subscription_by_id_200_response ) | ( put_subscription_by_id_400_response ) | ( put_subscription_by_id_404_response ) | ( put_subscription_by_id_500_response );
  post_notification_response: ( JSON_container ) | ( post_notification_404_response ) | ( post_notification_500_response );
  put_notification_response: ( JSON_container ) | ( put_notification_400_response ) | ( put_notification_404_response ) | ( put_notification_500_response );
  delete_notification_response: ( delete_notification_200_response ) | ( delete_notification_400_response ) | ( delete_notification_404_response ) | ( delete_notification_500_response );
  post_payment_response: ( JSON_container ) | ( post_payment_404_response ) | ( post_payment_500_response );
  put_payment_response: ( JSON_container ) | ( put_payment_400_response ) | ( put_payment_404_response ) | ( put_payment_500_response );
  delete_payment_response: ( delete_payment_200_response ) | ( delete_payment_400_response ) | ( delete_payment_404_response ) | ( delete_payment_500_response );
  post_send_response: ( ChatResponse ) | ( post_send_400_response ) | ( post_send_500_response );
}>;


/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Query: ResolverTypeWrapper<{}>;
  Mutation: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  post_api_login_response: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['post_api_login_response']>;
  models_LoginResponse: ResolverTypeWrapper<models_LoginResponse>;
  models_UserResponse: ResolverTypeWrapper<models_UserResponse>;
  EmailAddress: ResolverTypeWrapper<Scalars['EmailAddress']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  models_ErrorResponse: ResolverTypeWrapper<models_ErrorResponse>;
  models_LoginRequest_Input: models_LoginRequest_Input;
  post_api_manager_register_response: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['post_api_manager_register_response']>;
  models_RegisterUserResponse: ResolverTypeWrapper<models_RegisterUserResponse>;
  models_RegisterManagerRequest_Input: models_RegisterManagerRequest_Input;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Date: ResolverTypeWrapper<Scalars['Date']['output']>;
  post_api_register_response: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['post_api_register_response']>;
  models_RegisterUserRequest_Input: models_RegisterUserRequest_Input;
  HTTPMethod: HTTPMethod;
  ObjMap: ResolverTypeWrapper<Scalars['ObjMap']['output']>;
  user_by_id_200_response: ResolverTypeWrapper<user_by_id_200_response>;
  query_site_items: ResolverTypeWrapper<query_site_items>;
  JSON: ResolverTypeWrapper<Scalars['JSON']['output']>;
  query_appointment_items: ResolverTypeWrapper<query_appointment_items>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']['output']>;
  query_service_items: ResolverTypeWrapper<query_service_items>;
  query_category_items: ResolverTypeWrapper<query_category_items>;
  query_worker_items: ResolverTypeWrapper<query_worker_items>;
  subscription_by_id_response: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['subscription_by_id_response']>;
  subscription_by_id_200_response: ResolverTypeWrapper<subscription_by_id_200_response>;
  subscription_by_id_404_response: ResolverTypeWrapper<subscription_by_id_404_response>;
  notification_response: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['notification_response']>;
  query_notification_oneOf_0_items: ResolverTypeWrapper<query_notification_oneOf_0_items>;
  notification_404_response: ResolverTypeWrapper<notification_404_response>;
  payment_response: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['payment_response']>;
  query_payment_oneOf_0_items: ResolverTypeWrapper<query_payment_oneOf_0_items>;
  payment_404_response: ResolverTypeWrapper<payment_404_response>;
  payment_worker_statistics_response: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['payment_worker_statistics_response']>;
  payment_worker_statistics_200_response: ResolverTypeWrapper<payment_worker_statistics_200_response>;
  query_payment_worker_statistics_oneOf_0_statistics_items: ResolverTypeWrapper<query_payment_worker_statistics_oneOf_0_statistics_items>;
  payment_worker_statistics_400_response: ResolverTypeWrapper<payment_worker_statistics_400_response>;
  payment_site_statistics_response: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['payment_site_statistics_response']>;
  payment_site_statistics_200_response: ResolverTypeWrapper<payment_site_statistics_200_response>;
  query_payment_site_statistics_oneOf_0_statistics_items: ResolverTypeWrapper<query_payment_site_statistics_oneOf_0_statistics_items>;
  payment_site_statistics_400_response: ResolverTypeWrapper<payment_site_statistics_400_response>;
  payment_service_statistics_response: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['payment_service_statistics_response']>;
  payment_service_statistics_200_response: ResolverTypeWrapper<payment_service_statistics_200_response>;
  query_payment_service_statistics_oneOf_0_statistics_items: ResolverTypeWrapper<query_payment_service_statistics_oneOf_0_statistics_items>;
  payment_service_statistics_400_response: ResolverTypeWrapper<payment_service_statistics_400_response>;
  post_login_200_response: ResolverTypeWrapper<post_login_200_response>;
  post_login_request_Input: post_login_request_Input;
  post_register_201_response: ResolverTypeWrapper<post_register_201_response>;
  post_register_request_Input: post_register_request_Input;
  post_manager_register_201_response: ResolverTypeWrapper<post_manager_register_201_response>;
  post_manager_register_request_Input: post_manager_register_request_Input;
  post_logout_200_response: ResolverTypeWrapper<post_logout_200_response>;
  post_register_google_201_response: ResolverTypeWrapper<post_register_google_201_response>;
  post_register_google_request_Input: post_register_google_request_Input;
  post_login_google_200_response: ResolverTypeWrapper<post_login_google_200_response>;
  post_login_google_request_Input: post_login_google_request_Input;
  post_enable_2fa_200_response: ResolverTypeWrapper<post_enable_2fa_200_response>;
  post_verify_2fa_200_response: ResolverTypeWrapper<post_verify_2fa_200_response>;
  post_verify_2fa_request_Input: post_verify_2fa_request_Input;
  put_user_by_id_200_response: ResolverTypeWrapper<put_user_by_id_200_response>;
  put_user_by_id_request_Input: put_user_by_id_request_Input;
  delete_user_by_id_200_response: ResolverTypeWrapper<delete_user_by_id_200_response>;
  post_user_reset_password_request_200_response: ResolverTypeWrapper<post_user_reset_password_request_200_response>;
  post_user_reset_password_request_request_Input: post_user_reset_password_request_request_Input;
  post_user_reset_password_200_response: ResolverTypeWrapper<post_user_reset_password_200_response>;
  post_user_reset_password_request_Input: post_user_reset_password_request_Input;
  post_site_201_response: ResolverTypeWrapper<post_site_201_response>;
  post_site_request_Input: post_site_request_Input;
  mutationInput_post_site_input_photos_Input: mutationInput_post_site_input_photos_Input;
  put_site_200_response: ResolverTypeWrapper<put_site_200_response>;
  put_site_request_Input: put_site_request_Input;
  mutationInput_put_site_input_photos_Input: mutationInput_put_site_input_photos_Input;
  delete_site_200_response: ResolverTypeWrapper<delete_site_200_response>;
  post_site_has_category_request_Input: post_site_has_category_request_Input;
  post_appointment_201_response: ResolverTypeWrapper<post_appointment_201_response>;
  post_appointment_request_Input: post_appointment_request_Input;
  put_appointment_200_response: ResolverTypeWrapper<put_appointment_200_response>;
  put_appointment_request_Input: put_appointment_request_Input;
  delete_appointment_200_response: ResolverTypeWrapper<delete_appointment_200_response>;
  post_service_201_response: ResolverTypeWrapper<post_service_201_response>;
  post_service_request_Input: post_service_request_Input;
  post_worker_201_response: ResolverTypeWrapper<post_worker_201_response>;
  post_worker_request_Input: post_worker_request_Input;
  put_worker_200_response: ResolverTypeWrapper<put_worker_200_response>;
  put_worker_request_Input: put_worker_request_Input;
  delete_worker_200_response: ResolverTypeWrapper<delete_worker_200_response>;
  post_worker_has_service_request_Input: post_worker_has_service_request_Input;
  put_subscription_by_id_response: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['put_subscription_by_id_response']>;
  put_subscription_by_id_200_response: ResolverTypeWrapper<put_subscription_by_id_200_response>;
  mutation_put_subscription_by_id_oneOf_0_manager: ResolverTypeWrapper<mutation_put_subscription_by_id_oneOf_0_manager>;
  put_subscription_by_id_400_response: ResolverTypeWrapper<put_subscription_by_id_400_response>;
  put_subscription_by_id_404_response: ResolverTypeWrapper<put_subscription_by_id_404_response>;
  put_subscription_by_id_500_response: ResolverTypeWrapper<put_subscription_by_id_500_response>;
  put_subscription_by_id_request_Input: put_subscription_by_id_request_Input;
  post_notification_response: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['post_notification_response']>;
  JSON_container: ResolverTypeWrapper<JSON_container>;
  post_notification_404_response: ResolverTypeWrapper<post_notification_404_response>;
  post_notification_500_response: ResolverTypeWrapper<post_notification_500_response>;
  post_notification_request_Input: post_notification_request_Input;
  put_notification_response: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['put_notification_response']>;
  put_notification_400_response: ResolverTypeWrapper<put_notification_400_response>;
  put_notification_404_response: ResolverTypeWrapper<put_notification_404_response>;
  put_notification_500_response: ResolverTypeWrapper<put_notification_500_response>;
  put_notification_request_Input: put_notification_request_Input;
  delete_notification_response: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['delete_notification_response']>;
  delete_notification_200_response: ResolverTypeWrapper<delete_notification_200_response>;
  delete_notification_400_response: ResolverTypeWrapper<delete_notification_400_response>;
  delete_notification_404_response: ResolverTypeWrapper<delete_notification_404_response>;
  delete_notification_500_response: ResolverTypeWrapper<delete_notification_500_response>;
  post_payment_response: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['post_payment_response']>;
  post_payment_404_response: ResolverTypeWrapper<post_payment_404_response>;
  post_payment_500_response: ResolverTypeWrapper<post_payment_500_response>;
  post_payment_request_Input: post_payment_request_Input;
  put_payment_response: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['put_payment_response']>;
  put_payment_400_response: ResolverTypeWrapper<put_payment_400_response>;
  put_payment_404_response: ResolverTypeWrapper<put_payment_404_response>;
  put_payment_500_response: ResolverTypeWrapper<put_payment_500_response>;
  put_payment_request_Input: put_payment_request_Input;
  delete_payment_response: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['delete_payment_response']>;
  delete_payment_200_response: ResolverTypeWrapper<delete_payment_200_response>;
  delete_payment_400_response: ResolverTypeWrapper<delete_payment_400_response>;
  delete_payment_404_response: ResolverTypeWrapper<delete_payment_404_response>;
  delete_payment_500_response: ResolverTypeWrapper<delete_payment_500_response>;
  post_detail_request_Input: post_detail_request_Input;
  mutationInput_post_detail_input_photos_Input: mutationInput_post_detail_input_photos_Input;
  URL: ResolverTypeWrapper<Scalars['URL']['output']>;
  put_detail_request_Input: put_detail_request_Input;
  mutationInput_put_detail_input_photos_Input: mutationInput_put_detail_input_photos_Input;
  post_availability_request_Input: post_availability_request_Input;
  Time: ResolverTypeWrapper<Scalars['Time']['output']>;
  put_availability_request_Input: put_availability_request_Input;
  post_days_off_request_Input: post_days_off_request_Input;
  put_days_off_request_Input: put_days_off_request_Input;
  post_send_response: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['post_send_response']>;
  ChatResponse: ResolverTypeWrapper<ChatResponse>;
  post_send_400_response: ResolverTypeWrapper<post_send_400_response>;
  post_send_500_response: ResolverTypeWrapper<post_send_500_response>;
  ChatRequest_Input: ChatRequest_Input;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Query: {};
  Mutation: {};
  String: Scalars['String']['output'];
  post_api_login_response: ResolversUnionTypes<ResolversParentTypes>['post_api_login_response'];
  models_LoginResponse: models_LoginResponse;
  models_UserResponse: models_UserResponse;
  EmailAddress: Scalars['EmailAddress']['output'];
  Int: Scalars['Int']['output'];
  models_ErrorResponse: models_ErrorResponse;
  models_LoginRequest_Input: models_LoginRequest_Input;
  post_api_manager_register_response: ResolversUnionTypes<ResolversParentTypes>['post_api_manager_register_response'];
  models_RegisterUserResponse: models_RegisterUserResponse;
  models_RegisterManagerRequest_Input: models_RegisterManagerRequest_Input;
  Boolean: Scalars['Boolean']['output'];
  Date: Scalars['Date']['output'];
  post_api_register_response: ResolversUnionTypes<ResolversParentTypes>['post_api_register_response'];
  models_RegisterUserRequest_Input: models_RegisterUserRequest_Input;
  ObjMap: Scalars['ObjMap']['output'];
  user_by_id_200_response: user_by_id_200_response;
  query_site_items: query_site_items;
  JSON: Scalars['JSON']['output'];
  query_appointment_items: query_appointment_items;
  DateTime: Scalars['DateTime']['output'];
  query_service_items: query_service_items;
  query_category_items: query_category_items;
  query_worker_items: query_worker_items;
  subscription_by_id_response: ResolversUnionTypes<ResolversParentTypes>['subscription_by_id_response'];
  subscription_by_id_200_response: subscription_by_id_200_response;
  subscription_by_id_404_response: subscription_by_id_404_response;
  notification_response: ResolversUnionTypes<ResolversParentTypes>['notification_response'];
  query_notification_oneOf_0_items: query_notification_oneOf_0_items;
  notification_404_response: notification_404_response;
  payment_response: ResolversUnionTypes<ResolversParentTypes>['payment_response'];
  query_payment_oneOf_0_items: query_payment_oneOf_0_items;
  payment_404_response: payment_404_response;
  payment_worker_statistics_response: ResolversUnionTypes<ResolversParentTypes>['payment_worker_statistics_response'];
  payment_worker_statistics_200_response: payment_worker_statistics_200_response;
  query_payment_worker_statistics_oneOf_0_statistics_items: query_payment_worker_statistics_oneOf_0_statistics_items;
  payment_worker_statistics_400_response: payment_worker_statistics_400_response;
  payment_site_statistics_response: ResolversUnionTypes<ResolversParentTypes>['payment_site_statistics_response'];
  payment_site_statistics_200_response: payment_site_statistics_200_response;
  query_payment_site_statistics_oneOf_0_statistics_items: query_payment_site_statistics_oneOf_0_statistics_items;
  payment_site_statistics_400_response: payment_site_statistics_400_response;
  payment_service_statistics_response: ResolversUnionTypes<ResolversParentTypes>['payment_service_statistics_response'];
  payment_service_statistics_200_response: payment_service_statistics_200_response;
  query_payment_service_statistics_oneOf_0_statistics_items: query_payment_service_statistics_oneOf_0_statistics_items;
  payment_service_statistics_400_response: payment_service_statistics_400_response;
  post_login_200_response: post_login_200_response;
  post_login_request_Input: post_login_request_Input;
  post_register_201_response: post_register_201_response;
  post_register_request_Input: post_register_request_Input;
  post_manager_register_201_response: post_manager_register_201_response;
  post_manager_register_request_Input: post_manager_register_request_Input;
  post_logout_200_response: post_logout_200_response;
  post_register_google_201_response: post_register_google_201_response;
  post_register_google_request_Input: post_register_google_request_Input;
  post_login_google_200_response: post_login_google_200_response;
  post_login_google_request_Input: post_login_google_request_Input;
  post_enable_2fa_200_response: post_enable_2fa_200_response;
  post_verify_2fa_200_response: post_verify_2fa_200_response;
  post_verify_2fa_request_Input: post_verify_2fa_request_Input;
  put_user_by_id_200_response: put_user_by_id_200_response;
  put_user_by_id_request_Input: put_user_by_id_request_Input;
  delete_user_by_id_200_response: delete_user_by_id_200_response;
  post_user_reset_password_request_200_response: post_user_reset_password_request_200_response;
  post_user_reset_password_request_request_Input: post_user_reset_password_request_request_Input;
  post_user_reset_password_200_response: post_user_reset_password_200_response;
  post_user_reset_password_request_Input: post_user_reset_password_request_Input;
  post_site_201_response: post_site_201_response;
  post_site_request_Input: post_site_request_Input;
  mutationInput_post_site_input_photos_Input: mutationInput_post_site_input_photos_Input;
  put_site_200_response: put_site_200_response;
  put_site_request_Input: put_site_request_Input;
  mutationInput_put_site_input_photos_Input: mutationInput_put_site_input_photos_Input;
  delete_site_200_response: delete_site_200_response;
  post_site_has_category_request_Input: post_site_has_category_request_Input;
  post_appointment_201_response: post_appointment_201_response;
  post_appointment_request_Input: post_appointment_request_Input;
  put_appointment_200_response: put_appointment_200_response;
  put_appointment_request_Input: put_appointment_request_Input;
  delete_appointment_200_response: delete_appointment_200_response;
  post_service_201_response: post_service_201_response;
  post_service_request_Input: post_service_request_Input;
  post_worker_201_response: post_worker_201_response;
  post_worker_request_Input: post_worker_request_Input;
  put_worker_200_response: put_worker_200_response;
  put_worker_request_Input: put_worker_request_Input;
  delete_worker_200_response: delete_worker_200_response;
  post_worker_has_service_request_Input: post_worker_has_service_request_Input;
  put_subscription_by_id_response: ResolversUnionTypes<ResolversParentTypes>['put_subscription_by_id_response'];
  put_subscription_by_id_200_response: put_subscription_by_id_200_response;
  mutation_put_subscription_by_id_oneOf_0_manager: mutation_put_subscription_by_id_oneOf_0_manager;
  put_subscription_by_id_400_response: put_subscription_by_id_400_response;
  put_subscription_by_id_404_response: put_subscription_by_id_404_response;
  put_subscription_by_id_500_response: put_subscription_by_id_500_response;
  put_subscription_by_id_request_Input: put_subscription_by_id_request_Input;
  post_notification_response: ResolversUnionTypes<ResolversParentTypes>['post_notification_response'];
  JSON_container: JSON_container;
  post_notification_404_response: post_notification_404_response;
  post_notification_500_response: post_notification_500_response;
  post_notification_request_Input: post_notification_request_Input;
  put_notification_response: ResolversUnionTypes<ResolversParentTypes>['put_notification_response'];
  put_notification_400_response: put_notification_400_response;
  put_notification_404_response: put_notification_404_response;
  put_notification_500_response: put_notification_500_response;
  put_notification_request_Input: put_notification_request_Input;
  delete_notification_response: ResolversUnionTypes<ResolversParentTypes>['delete_notification_response'];
  delete_notification_200_response: delete_notification_200_response;
  delete_notification_400_response: delete_notification_400_response;
  delete_notification_404_response: delete_notification_404_response;
  delete_notification_500_response: delete_notification_500_response;
  post_payment_response: ResolversUnionTypes<ResolversParentTypes>['post_payment_response'];
  post_payment_404_response: post_payment_404_response;
  post_payment_500_response: post_payment_500_response;
  post_payment_request_Input: post_payment_request_Input;
  put_payment_response: ResolversUnionTypes<ResolversParentTypes>['put_payment_response'];
  put_payment_400_response: put_payment_400_response;
  put_payment_404_response: put_payment_404_response;
  put_payment_500_response: put_payment_500_response;
  put_payment_request_Input: put_payment_request_Input;
  delete_payment_response: ResolversUnionTypes<ResolversParentTypes>['delete_payment_response'];
  delete_payment_200_response: delete_payment_200_response;
  delete_payment_400_response: delete_payment_400_response;
  delete_payment_404_response: delete_payment_404_response;
  delete_payment_500_response: delete_payment_500_response;
  post_detail_request_Input: post_detail_request_Input;
  mutationInput_post_detail_input_photos_Input: mutationInput_post_detail_input_photos_Input;
  URL: Scalars['URL']['output'];
  put_detail_request_Input: put_detail_request_Input;
  mutationInput_put_detail_input_photos_Input: mutationInput_put_detail_input_photos_Input;
  post_availability_request_Input: post_availability_request_Input;
  Time: Scalars['Time']['output'];
  put_availability_request_Input: put_availability_request_Input;
  post_days_off_request_Input: post_days_off_request_Input;
  put_days_off_request_Input: put_days_off_request_Input;
  post_send_response: ResolversUnionTypes<ResolversParentTypes>['post_send_response'];
  ChatResponse: ChatResponse;
  post_send_400_response: post_send_400_response;
  post_send_500_response: post_send_500_response;
  ChatRequest_Input: ChatRequest_Input;
}>;

export type statusCodeTypeNameDirectiveArgs = {
  subgraph?: Maybe<Scalars['String']['input']>;
  typeName?: Maybe<Scalars['String']['input']>;
  statusCode?: Maybe<Scalars['String']['input']>;
};

export type statusCodeTypeNameDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = statusCodeTypeNameDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type httpOperationDirectiveArgs = {
  subgraph?: Maybe<Scalars['String']['input']>;
  path?: Maybe<Scalars['String']['input']>;
  operationSpecificHeaders?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']['input']>>>>>;
  httpMethod?: Maybe<HTTPMethod>;
  isBinary?: Maybe<Scalars['Boolean']['input']>;
  requestBaseBody?: Maybe<Scalars['ObjMap']['input']>;
  queryParamArgMap?: Maybe<Scalars['ObjMap']['input']>;
  queryStringOptionsByParam?: Maybe<Scalars['ObjMap']['input']>;
  jsonApiFields?: Maybe<Scalars['Boolean']['input']>;
  queryStringOptions?: Maybe<Scalars['ObjMap']['input']>;
};

export type httpOperationDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = httpOperationDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type transportDirectiveArgs = {
  subgraph?: Maybe<Scalars['String']['input']>;
  kind?: Maybe<Scalars['String']['input']>;
  location?: Maybe<Scalars['String']['input']>;
  headers?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']['input']>>>>>;
  queryStringOptions?: Maybe<Scalars['ObjMap']['input']>;
  queryParams?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']['input']>>>>>;
};

export type transportDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = transportDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type resolveRootDirectiveArgs = {
  subgraph?: Maybe<Scalars['String']['input']>;
};

export type resolveRootDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = resolveRootDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type QueryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  dummy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user_by_id?: Resolver<Maybe<ResolversTypes['user_by_id_200_response']>, ParentType, ContextType, RequireFields<Queryuser_by_idArgs, 'id'>>;
  site?: Resolver<Maybe<Array<Maybe<ResolversTypes['query_site_items']>>>, ParentType, ContextType, Partial<QuerysiteArgs>>;
  site_has_category?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  appointment?: Resolver<Maybe<Array<Maybe<ResolversTypes['query_appointment_items']>>>, ParentType, ContextType, Partial<QueryappointmentArgs>>;
  appointmentdetail?: Resolver<Maybe<Array<Maybe<ResolversTypes['JSON']>>>, ParentType, ContextType, Partial<QueryappointmentdetailArgs>>;
  appointment_worker_statistics?: Resolver<Maybe<Array<Maybe<ResolversTypes['JSON']>>>, ParentType, ContextType, Partial<Queryappointment_worker_statisticsArgs>>;
  appointment_site_statistics?: Resolver<Maybe<Array<Maybe<ResolversTypes['JSON']>>>, ParentType, ContextType, Partial<Queryappointment_site_statisticsArgs>>;
  appointment_service_statistics?: Resolver<Maybe<Array<Maybe<ResolversTypes['JSON']>>>, ParentType, ContextType, Partial<Queryappointment_service_statisticsArgs>>;
  service?: Resolver<Maybe<Array<Maybe<ResolversTypes['query_service_items']>>>, ParentType, ContextType, Partial<QueryserviceArgs>>;
  category?: Resolver<Maybe<Array<Maybe<ResolversTypes['query_category_items']>>>, ParentType, ContextType>;
  worker?: Resolver<Maybe<Array<Maybe<ResolversTypes['query_worker_items']>>>, ParentType, ContextType, Partial<QueryworkerArgs>>;
  worker_weekly_schedule?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<Queryworker_weekly_scheduleArgs, 'worker_id'>>;
  worker_daily_schedule?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<Queryworker_daily_scheduleArgs, 'worker_id' | 'date'>>;
  worker_has_service?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  subscription_by_id?: Resolver<Maybe<ResolversTypes['subscription_by_id_response']>, ParentType, ContextType, RequireFields<Querysubscription_by_idArgs, 'id'>>;
  notification?: Resolver<Maybe<Array<Maybe<ResolversTypes['notification_response']>>>, ParentType, ContextType, Partial<QuerynotificationArgs>>;
  payment?: Resolver<Maybe<Array<Maybe<ResolversTypes['payment_response']>>>, ParentType, ContextType, Partial<QuerypaymentArgs>>;
  payment_worker_statistics?: Resolver<Maybe<ResolversTypes['payment_worker_statistics_response']>, ParentType, ContextType, RequireFields<Querypayment_worker_statisticsArgs, 'site_id'>>;
  payment_site_statistics?: Resolver<Maybe<ResolversTypes['payment_site_statistics_response']>, ParentType, ContextType, RequireFields<Querypayment_site_statisticsArgs, 'site_id'>>;
  payment_service_statistics?: Resolver<Maybe<ResolversTypes['payment_service_statistics_response']>, ParentType, ContextType, RequireFields<Querypayment_service_statisticsArgs, 'site_id'>>;
  detail?: Resolver<Maybe<Array<Maybe<ResolversTypes['JSON']>>>, ParentType, ContextType, Partial<QuerydetailArgs>>;
  availability?: Resolver<Maybe<Array<Maybe<ResolversTypes['JSON']>>>, ParentType, ContextType, Partial<QueryavailabilityArgs>>;
  days_off?: Resolver<Maybe<Array<Maybe<ResolversTypes['JSON']>>>, ParentType, ContextType, Partial<Querydays_offArgs>>;
}>;

export type MutationResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  post_api_login?: Resolver<Maybe<ResolversTypes['post_api_login_response']>, ParentType, ContextType, RequireFields<Mutationpost_api_loginArgs, 'input'>>;
  post_api_manager_register?: Resolver<Maybe<ResolversTypes['post_api_manager_register_response']>, ParentType, ContextType, RequireFields<Mutationpost_api_manager_registerArgs, 'input'>>;
  post_api_register?: Resolver<Maybe<ResolversTypes['post_api_register_response']>, ParentType, ContextType, RequireFields<Mutationpost_api_registerArgs, 'input'>>;
  post_login?: Resolver<Maybe<ResolversTypes['post_login_200_response']>, ParentType, ContextType, RequireFields<Mutationpost_loginArgs, 'input'>>;
  post_register?: Resolver<Maybe<ResolversTypes['post_register_201_response']>, ParentType, ContextType, RequireFields<Mutationpost_registerArgs, 'input'>>;
  post_manager_register?: Resolver<Maybe<ResolversTypes['post_manager_register_201_response']>, ParentType, ContextType, RequireFields<Mutationpost_manager_registerArgs, 'input'>>;
  post_logout?: Resolver<Maybe<ResolversTypes['post_logout_200_response']>, ParentType, ContextType>;
  post_register_google?: Resolver<Maybe<ResolversTypes['post_register_google_201_response']>, ParentType, ContextType, RequireFields<Mutationpost_register_googleArgs, 'input'>>;
  post_login_google?: Resolver<Maybe<ResolversTypes['post_login_google_200_response']>, ParentType, ContextType, RequireFields<Mutationpost_login_googleArgs, 'input'>>;
  post_enable_2fa?: Resolver<Maybe<ResolversTypes['post_enable_2fa_200_response']>, ParentType, ContextType>;
  post_verify_2fa?: Resolver<Maybe<ResolversTypes['post_verify_2fa_200_response']>, ParentType, ContextType, RequireFields<Mutationpost_verify_2faArgs, 'input'>>;
  put_user_by_id?: Resolver<Maybe<ResolversTypes['put_user_by_id_200_response']>, ParentType, ContextType, RequireFields<Mutationput_user_by_idArgs, 'id' | 'input'>>;
  delete_user_by_id?: Resolver<Maybe<ResolversTypes['delete_user_by_id_200_response']>, ParentType, ContextType, RequireFields<Mutationdelete_user_by_idArgs, 'id'>>;
  post_user_reset_password_request?: Resolver<Maybe<ResolversTypes['post_user_reset_password_request_200_response']>, ParentType, ContextType, RequireFields<Mutationpost_user_reset_password_requestArgs, 'input'>>;
  post_user_reset_password?: Resolver<Maybe<ResolversTypes['post_user_reset_password_200_response']>, ParentType, ContextType, RequireFields<Mutationpost_user_reset_passwordArgs, 'input'>>;
  post_site?: Resolver<Maybe<ResolversTypes['post_site_201_response']>, ParentType, ContextType, RequireFields<Mutationpost_siteArgs, 'input'>>;
  put_site?: Resolver<Maybe<ResolversTypes['put_site_200_response']>, ParentType, ContextType, RequireFields<Mutationput_siteArgs, 'input'>>;
  delete_site?: Resolver<Maybe<ResolversTypes['delete_site_200_response']>, ParentType, ContextType, Partial<Mutationdelete_siteArgs>>;
  post_site_has_category?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<Mutationpost_site_has_categoryArgs, 'input'>>;
  post_appointment?: Resolver<Maybe<ResolversTypes['post_appointment_201_response']>, ParentType, ContextType, RequireFields<Mutationpost_appointmentArgs, 'input'>>;
  put_appointment?: Resolver<Maybe<ResolversTypes['put_appointment_200_response']>, ParentType, ContextType, RequireFields<Mutationput_appointmentArgs, 'id' | 'input'>>;
  delete_appointment?: Resolver<Maybe<ResolversTypes['delete_appointment_200_response']>, ParentType, ContextType, RequireFields<Mutationdelete_appointmentArgs, 'id'>>;
  post_service?: Resolver<Maybe<ResolversTypes['post_service_201_response']>, ParentType, ContextType, RequireFields<Mutationpost_serviceArgs, 'input'>>;
  post_worker?: Resolver<Maybe<ResolversTypes['post_worker_201_response']>, ParentType, ContextType, RequireFields<Mutationpost_workerArgs, 'input'>>;
  put_worker?: Resolver<Maybe<ResolversTypes['put_worker_200_response']>, ParentType, ContextType, RequireFields<Mutationput_workerArgs, 'input'>>;
  delete_worker?: Resolver<Maybe<ResolversTypes['delete_worker_200_response']>, ParentType, ContextType, Partial<Mutationdelete_workerArgs>>;
  post_worker_has_service?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<Mutationpost_worker_has_serviceArgs, 'input'>>;
  put_subscription_by_id?: Resolver<Maybe<ResolversTypes['put_subscription_by_id_response']>, ParentType, ContextType, RequireFields<Mutationput_subscription_by_idArgs, 'id' | 'input'>>;
  post_notification?: Resolver<Maybe<ResolversTypes['post_notification_response']>, ParentType, ContextType, RequireFields<Mutationpost_notificationArgs, 'input'>>;
  put_notification?: Resolver<Maybe<ResolversTypes['put_notification_response']>, ParentType, ContextType, RequireFields<Mutationput_notificationArgs, 'input'>>;
  delete_notification?: Resolver<Maybe<ResolversTypes['delete_notification_response']>, ParentType, ContextType, RequireFields<Mutationdelete_notificationArgs, 'id'>>;
  post_payment?: Resolver<Maybe<ResolversTypes['post_payment_response']>, ParentType, ContextType, RequireFields<Mutationpost_paymentArgs, 'input'>>;
  put_payment?: Resolver<Maybe<ResolversTypes['put_payment_response']>, ParentType, ContextType, RequireFields<Mutationput_paymentArgs, 'input'>>;
  delete_payment?: Resolver<Maybe<ResolversTypes['delete_payment_response']>, ParentType, ContextType, RequireFields<Mutationdelete_paymentArgs, 'id'>>;
  post_detail?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<Mutationpost_detailArgs, 'input'>>;
  put_detail?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<Mutationput_detailArgs, 'input'>>;
  delete_detail?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, Partial<Mutationdelete_detailArgs>>;
  post_availability?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<Mutationpost_availabilityArgs, 'input'>>;
  put_availability?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<Mutationput_availabilityArgs, 'input'>>;
  delete_availability?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, Partial<Mutationdelete_availabilityArgs>>;
  post_days_off?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, RequireFields<Mutationpost_days_offArgs, 'input'>>;
  put_days_off?: Resolver<Maybe<Array<Maybe<ResolversTypes['JSON']>>>, ParentType, ContextType, RequireFields<Mutationput_days_offArgs, 'input'>>;
  delete_days_off?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType, Partial<Mutationdelete_days_offArgs>>;
  post_send?: Resolver<Maybe<ResolversTypes['post_send_response']>, ParentType, ContextType, Partial<Mutationpost_sendArgs>>;
}>;

export type post_api_login_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['post_api_login_response'] = ResolversParentTypes['post_api_login_response']> = ResolversObject<{
  __resolveType: TypeResolveFn<'models_LoginResponse' | 'models_ErrorResponse', ParentType, ContextType>;
}>;

export type models_LoginResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['models_LoginResponse'] = ResolversParentTypes['models_LoginResponse']> = ResolversObject<{
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['models_UserResponse']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type models_UserResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['models_UserResponse'] = ResolversParentTypes['models_UserResponse']> = ResolversObject<{
  email?: Resolver<Maybe<ResolversTypes['EmailAddress']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface EmailAddressScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['EmailAddress'], any> {
  name: 'EmailAddress';
}

export type models_ErrorResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['models_ErrorResponse'] = ResolversParentTypes['models_ErrorResponse']> = ResolversObject<{
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type post_api_manager_register_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['post_api_manager_register_response'] = ResolversParentTypes['post_api_manager_register_response']> = ResolversObject<{
  __resolveType: TypeResolveFn<'models_RegisterUserResponse' | 'models_ErrorResponse', ParentType, ContextType>;
}>;

export type models_RegisterUserResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['models_RegisterUserResponse'] = ResolversParentTypes['models_RegisterUserResponse']> = ResolversObject<{
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['models_UserResponse']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export type post_api_register_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['post_api_register_response'] = ResolversParentTypes['post_api_register_response']> = ResolversObject<{
  __resolveType: TypeResolveFn<'models_RegisterUserResponse' | 'models_ErrorResponse', ParentType, ContextType>;
}>;

export interface ObjMapScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['ObjMap'], any> {
  name: 'ObjMap';
}

export type user_by_id_200_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['user_by_id_200_response'] = ResolversParentTypes['user_by_id_200_response']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  active?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type query_site_itemsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['query_site_items'] = ResolversParentTypes['query_site_items']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  manager_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface JSONScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON';
}

export type query_appointment_itemsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['query_appointment_items'] = ResolversParentTypes['query_appointment_items']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  appointmenttime?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  worker_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  site_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  service_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  client_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type query_service_itemsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['query_service_items'] = ResolversParentTypes['query_service_items']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  category_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type query_category_itemsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['query_category_items'] = ResolversParentTypes['query_category_items']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type query_worker_itemsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['query_worker_items'] = ResolversParentTypes['query_worker_items']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  site_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type subscription_by_id_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['subscription_by_id_response'] = ResolversParentTypes['subscription_by_id_response']> = ResolversObject<{
  __resolveType: TypeResolveFn<'subscription_by_id_200_response' | 'subscription_by_id_404_response', ParentType, ContextType>;
}>;

export type subscription_by_id_200_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['subscription_by_id_200_response'] = ResolversParentTypes['subscription_by_id_200_response']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  subscriptionactive?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  subscriptionstartdate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  subscriptiontype?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subscriptionfinishdate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type subscription_by_id_404_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['subscription_by_id_404_response'] = ResolversParentTypes['subscription_by_id_404_response']> = ResolversObject<{
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type notification_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['notification_response'] = ResolversParentTypes['notification_response']> = ResolversObject<{
  __resolveType: TypeResolveFn<'query_notification_oneOf_0_items' | 'notification_404_response', ParentType, ContextType>;
}>;

export type query_notification_oneOf_0_itemsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['query_notification_oneOf_0_items'] = ResolversParentTypes['query_notification_oneOf_0_items']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  appointment_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  worker_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  service_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  site_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type notification_404_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['notification_404_response'] = ResolversParentTypes['notification_404_response']> = ResolversObject<{
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type payment_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['payment_response'] = ResolversParentTypes['payment_response']> = ResolversObject<{
  __resolveType: TypeResolveFn<'query_payment_oneOf_0_items' | 'payment_404_response', ParentType, ContextType>;
}>;

export type query_payment_oneOf_0_itemsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['query_payment_oneOf_0_items'] = ResolversParentTypes['query_payment_oneOf_0_items']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  amount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  paymentmethod?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  appointment_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  worker_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  service_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  site_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type payment_404_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['payment_404_response'] = ResolversParentTypes['payment_404_response']> = ResolversObject<{
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type payment_worker_statistics_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['payment_worker_statistics_response'] = ResolversParentTypes['payment_worker_statistics_response']> = ResolversObject<{
  __resolveType: TypeResolveFn<'payment_worker_statistics_200_response' | 'payment_worker_statistics_400_response', ParentType, ContextType>;
}>;

export type payment_worker_statistics_200_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['payment_worker_statistics_200_response'] = ResolversParentTypes['payment_worker_statistics_200_response']> = ResolversObject<{
  site_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  period?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  count_periods?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  statistics?: Resolver<Maybe<Array<Maybe<ResolversTypes['query_payment_worker_statistics_oneOf_0_statistics_items']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type query_payment_worker_statistics_oneOf_0_statistics_itemsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['query_payment_worker_statistics_oneOf_0_statistics_items'] = ResolversParentTypes['query_payment_worker_statistics_oneOf_0_statistics_items']> = ResolversObject<{
  worker_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  total_amount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  day?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  week_start?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  year?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  month?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type payment_worker_statistics_400_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['payment_worker_statistics_400_response'] = ResolversParentTypes['payment_worker_statistics_400_response']> = ResolversObject<{
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type payment_site_statistics_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['payment_site_statistics_response'] = ResolversParentTypes['payment_site_statistics_response']> = ResolversObject<{
  __resolveType: TypeResolveFn<'payment_site_statistics_200_response' | 'payment_site_statistics_400_response', ParentType, ContextType>;
}>;

export type payment_site_statistics_200_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['payment_site_statistics_200_response'] = ResolversParentTypes['payment_site_statistics_200_response']> = ResolversObject<{
  site_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  period?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  count_periods?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  statistics?: Resolver<Maybe<Array<Maybe<ResolversTypes['query_payment_site_statistics_oneOf_0_statistics_items']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type query_payment_site_statistics_oneOf_0_statistics_itemsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['query_payment_site_statistics_oneOf_0_statistics_items'] = ResolversParentTypes['query_payment_site_statistics_oneOf_0_statistics_items']> = ResolversObject<{
  total_amount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  day?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  week_start?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  year?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  month?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type payment_site_statistics_400_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['payment_site_statistics_400_response'] = ResolversParentTypes['payment_site_statistics_400_response']> = ResolversObject<{
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type payment_service_statistics_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['payment_service_statistics_response'] = ResolversParentTypes['payment_service_statistics_response']> = ResolversObject<{
  __resolveType: TypeResolveFn<'payment_service_statistics_200_response' | 'payment_service_statistics_400_response', ParentType, ContextType>;
}>;

export type payment_service_statistics_200_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['payment_service_statistics_200_response'] = ResolversParentTypes['payment_service_statistics_200_response']> = ResolversObject<{
  site_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  period?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  count_periods?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  statistics?: Resolver<Maybe<Array<Maybe<ResolversTypes['query_payment_service_statistics_oneOf_0_statistics_items']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type query_payment_service_statistics_oneOf_0_statistics_itemsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['query_payment_service_statistics_oneOf_0_statistics_items'] = ResolversParentTypes['query_payment_service_statistics_oneOf_0_statistics_items']> = ResolversObject<{
  service_id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  total_amount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  day?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  week_start?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  year?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  month?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type payment_service_statistics_400_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['payment_service_statistics_400_response'] = ResolversParentTypes['payment_service_statistics_400_response']> = ResolversObject<{
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type post_login_200_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['post_login_200_response'] = ResolversParentTypes['post_login_200_response']> = ResolversObject<{
  user?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  access_token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  refresh_token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  manager?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subscription_active?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type post_register_201_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['post_register_201_response'] = ResolversParentTypes['post_register_201_response']> = ResolversObject<{
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type post_manager_register_201_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['post_manager_register_201_response'] = ResolversParentTypes['post_manager_register_201_response']> = ResolversObject<{
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type post_logout_200_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['post_logout_200_response'] = ResolversParentTypes['post_logout_200_response']> = ResolversObject<{
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type post_register_google_201_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['post_register_google_201_response'] = ResolversParentTypes['post_register_google_201_response']> = ResolversObject<{
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type post_login_google_200_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['post_login_google_200_response'] = ResolversParentTypes['post_login_google_200_response']> = ResolversObject<{
  access_token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  refresh_token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type post_enable_2fa_200_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['post_enable_2fa_200_response'] = ResolversParentTypes['post_enable_2fa_200_response']> = ResolversObject<{
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  secret?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uri?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type post_verify_2fa_200_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['post_verify_2fa_200_response'] = ResolversParentTypes['post_verify_2fa_200_response']> = ResolversObject<{
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type put_user_by_id_200_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['put_user_by_id_200_response'] = ResolversParentTypes['put_user_by_id_200_response']> = ResolversObject<{
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type delete_user_by_id_200_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['delete_user_by_id_200_response'] = ResolversParentTypes['delete_user_by_id_200_response']> = ResolversObject<{
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type post_user_reset_password_request_200_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['post_user_reset_password_request_200_response'] = ResolversParentTypes['post_user_reset_password_request_200_response']> = ResolversObject<{
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type post_user_reset_password_200_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['post_user_reset_password_200_response'] = ResolversParentTypes['post_user_reset_password_200_response']> = ResolversObject<{
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type post_site_201_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['post_site_201_response'] = ResolversParentTypes['post_site_201_response']> = ResolversObject<{
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  site?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type put_site_200_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['put_site_200_response'] = ResolversParentTypes['put_site_200_response']> = ResolversObject<{
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  site?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type delete_site_200_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['delete_site_200_response'] = ResolversParentTypes['delete_site_200_response']> = ResolversObject<{
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type post_appointment_201_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['post_appointment_201_response'] = ResolversParentTypes['post_appointment_201_response']> = ResolversObject<{
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  appointment?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type put_appointment_200_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['put_appointment_200_response'] = ResolversParentTypes['put_appointment_200_response']> = ResolversObject<{
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  appointment?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type delete_appointment_200_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['delete_appointment_200_response'] = ResolversParentTypes['delete_appointment_200_response']> = ResolversObject<{
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type post_service_201_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['post_service_201_response'] = ResolversParentTypes['post_service_201_response']> = ResolversObject<{
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  service?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type post_worker_201_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['post_worker_201_response'] = ResolversParentTypes['post_worker_201_response']> = ResolversObject<{
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  worker?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type put_worker_200_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['put_worker_200_response'] = ResolversParentTypes['put_worker_200_response']> = ResolversObject<{
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  worker?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type delete_worker_200_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['delete_worker_200_response'] = ResolversParentTypes['delete_worker_200_response']> = ResolversObject<{
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type put_subscription_by_id_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['put_subscription_by_id_response'] = ResolversParentTypes['put_subscription_by_id_response']> = ResolversObject<{
  __resolveType: TypeResolveFn<'put_subscription_by_id_200_response' | 'put_subscription_by_id_400_response' | 'put_subscription_by_id_404_response' | 'put_subscription_by_id_500_response', ParentType, ContextType>;
}>;

export type put_subscription_by_id_200_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['put_subscription_by_id_200_response'] = ResolversParentTypes['put_subscription_by_id_200_response']> = ResolversObject<{
  manager?: Resolver<Maybe<ResolversTypes['mutation_put_subscription_by_id_oneOf_0_manager']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mutation_put_subscription_by_id_oneOf_0_managerResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mutation_put_subscription_by_id_oneOf_0_manager'] = ResolversParentTypes['mutation_put_subscription_by_id_oneOf_0_manager']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  subscriptionactive?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  subscriptionstartdate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  subscriptiontype?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  subscriptionfinishdate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type put_subscription_by_id_400_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['put_subscription_by_id_400_response'] = ResolversParentTypes['put_subscription_by_id_400_response']> = ResolversObject<{
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type put_subscription_by_id_404_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['put_subscription_by_id_404_response'] = ResolversParentTypes['put_subscription_by_id_404_response']> = ResolversObject<{
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type put_subscription_by_id_500_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['put_subscription_by_id_500_response'] = ResolversParentTypes['put_subscription_by_id_500_response']> = ResolversObject<{
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type post_notification_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['post_notification_response'] = ResolversParentTypes['post_notification_response']> = ResolversObject<{
  __resolveType: TypeResolveFn<'JSON_container' | 'post_notification_404_response' | 'post_notification_500_response', ParentType, ContextType>;
}>;

export type JSON_containerResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['JSON_container'] = ResolversParentTypes['JSON_container']> = ResolversObject<{
  JSON?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type post_notification_404_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['post_notification_404_response'] = ResolversParentTypes['post_notification_404_response']> = ResolversObject<{
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type post_notification_500_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['post_notification_500_response'] = ResolversParentTypes['post_notification_500_response']> = ResolversObject<{
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type put_notification_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['put_notification_response'] = ResolversParentTypes['put_notification_response']> = ResolversObject<{
  __resolveType: TypeResolveFn<'JSON_container' | 'put_notification_400_response' | 'put_notification_404_response' | 'put_notification_500_response', ParentType, ContextType>;
}>;

export type put_notification_400_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['put_notification_400_response'] = ResolversParentTypes['put_notification_400_response']> = ResolversObject<{
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type put_notification_404_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['put_notification_404_response'] = ResolversParentTypes['put_notification_404_response']> = ResolversObject<{
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type put_notification_500_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['put_notification_500_response'] = ResolversParentTypes['put_notification_500_response']> = ResolversObject<{
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type delete_notification_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['delete_notification_response'] = ResolversParentTypes['delete_notification_response']> = ResolversObject<{
  __resolveType: TypeResolveFn<'delete_notification_200_response' | 'delete_notification_400_response' | 'delete_notification_404_response' | 'delete_notification_500_response', ParentType, ContextType>;
}>;

export type delete_notification_200_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['delete_notification_200_response'] = ResolversParentTypes['delete_notification_200_response']> = ResolversObject<{
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type delete_notification_400_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['delete_notification_400_response'] = ResolversParentTypes['delete_notification_400_response']> = ResolversObject<{
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type delete_notification_404_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['delete_notification_404_response'] = ResolversParentTypes['delete_notification_404_response']> = ResolversObject<{
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type delete_notification_500_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['delete_notification_500_response'] = ResolversParentTypes['delete_notification_500_response']> = ResolversObject<{
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type post_payment_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['post_payment_response'] = ResolversParentTypes['post_payment_response']> = ResolversObject<{
  __resolveType: TypeResolveFn<'JSON_container' | 'post_payment_404_response' | 'post_payment_500_response', ParentType, ContextType>;
}>;

export type post_payment_404_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['post_payment_404_response'] = ResolversParentTypes['post_payment_404_response']> = ResolversObject<{
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type post_payment_500_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['post_payment_500_response'] = ResolversParentTypes['post_payment_500_response']> = ResolversObject<{
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type put_payment_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['put_payment_response'] = ResolversParentTypes['put_payment_response']> = ResolversObject<{
  __resolveType: TypeResolveFn<'JSON_container' | 'put_payment_400_response' | 'put_payment_404_response' | 'put_payment_500_response', ParentType, ContextType>;
}>;

export type put_payment_400_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['put_payment_400_response'] = ResolversParentTypes['put_payment_400_response']> = ResolversObject<{
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type put_payment_404_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['put_payment_404_response'] = ResolversParentTypes['put_payment_404_response']> = ResolversObject<{
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type put_payment_500_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['put_payment_500_response'] = ResolversParentTypes['put_payment_500_response']> = ResolversObject<{
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type delete_payment_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['delete_payment_response'] = ResolversParentTypes['delete_payment_response']> = ResolversObject<{
  __resolveType: TypeResolveFn<'delete_payment_200_response' | 'delete_payment_400_response' | 'delete_payment_404_response' | 'delete_payment_500_response', ParentType, ContextType>;
}>;

export type delete_payment_200_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['delete_payment_200_response'] = ResolversParentTypes['delete_payment_200_response']> = ResolversObject<{
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type delete_payment_400_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['delete_payment_400_response'] = ResolversParentTypes['delete_payment_400_response']> = ResolversObject<{
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type delete_payment_404_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['delete_payment_404_response'] = ResolversParentTypes['delete_payment_404_response']> = ResolversObject<{
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type delete_payment_500_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['delete_payment_500_response'] = ResolversParentTypes['delete_payment_500_response']> = ResolversObject<{
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface URLScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['URL'], any> {
  name: 'URL';
}

export interface TimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Time'], any> {
  name: 'Time';
}

export type post_send_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['post_send_response'] = ResolversParentTypes['post_send_response']> = ResolversObject<{
  __resolveType: TypeResolveFn<'ChatResponse' | 'post_send_400_response' | 'post_send_500_response', ParentType, ContextType>;
}>;

export type ChatResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ChatResponse'] = ResolversParentTypes['ChatResponse']> = ResolversObject<{
  reply?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  session_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type post_send_400_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['post_send_400_response'] = ResolversParentTypes['post_send_400_response']> = ResolversObject<{
  detail?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type post_send_500_responseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['post_send_500_response'] = ResolversParentTypes['post_send_500_response']> = ResolversObject<{
  detail?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = MeshContext> = ResolversObject<{
  Query?: QueryResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  post_api_login_response?: post_api_login_responseResolvers<ContextType>;
  models_LoginResponse?: models_LoginResponseResolvers<ContextType>;
  models_UserResponse?: models_UserResponseResolvers<ContextType>;
  EmailAddress?: GraphQLScalarType;
  models_ErrorResponse?: models_ErrorResponseResolvers<ContextType>;
  post_api_manager_register_response?: post_api_manager_register_responseResolvers<ContextType>;
  models_RegisterUserResponse?: models_RegisterUserResponseResolvers<ContextType>;
  Date?: GraphQLScalarType;
  post_api_register_response?: post_api_register_responseResolvers<ContextType>;
  ObjMap?: GraphQLScalarType;
  user_by_id_200_response?: user_by_id_200_responseResolvers<ContextType>;
  query_site_items?: query_site_itemsResolvers<ContextType>;
  JSON?: GraphQLScalarType;
  query_appointment_items?: query_appointment_itemsResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  query_service_items?: query_service_itemsResolvers<ContextType>;
  query_category_items?: query_category_itemsResolvers<ContextType>;
  query_worker_items?: query_worker_itemsResolvers<ContextType>;
  subscription_by_id_response?: subscription_by_id_responseResolvers<ContextType>;
  subscription_by_id_200_response?: subscription_by_id_200_responseResolvers<ContextType>;
  subscription_by_id_404_response?: subscription_by_id_404_responseResolvers<ContextType>;
  notification_response?: notification_responseResolvers<ContextType>;
  query_notification_oneOf_0_items?: query_notification_oneOf_0_itemsResolvers<ContextType>;
  notification_404_response?: notification_404_responseResolvers<ContextType>;
  payment_response?: payment_responseResolvers<ContextType>;
  query_payment_oneOf_0_items?: query_payment_oneOf_0_itemsResolvers<ContextType>;
  payment_404_response?: payment_404_responseResolvers<ContextType>;
  payment_worker_statistics_response?: payment_worker_statistics_responseResolvers<ContextType>;
  payment_worker_statistics_200_response?: payment_worker_statistics_200_responseResolvers<ContextType>;
  query_payment_worker_statistics_oneOf_0_statistics_items?: query_payment_worker_statistics_oneOf_0_statistics_itemsResolvers<ContextType>;
  payment_worker_statistics_400_response?: payment_worker_statistics_400_responseResolvers<ContextType>;
  payment_site_statistics_response?: payment_site_statistics_responseResolvers<ContextType>;
  payment_site_statistics_200_response?: payment_site_statistics_200_responseResolvers<ContextType>;
  query_payment_site_statistics_oneOf_0_statistics_items?: query_payment_site_statistics_oneOf_0_statistics_itemsResolvers<ContextType>;
  payment_site_statistics_400_response?: payment_site_statistics_400_responseResolvers<ContextType>;
  payment_service_statistics_response?: payment_service_statistics_responseResolvers<ContextType>;
  payment_service_statistics_200_response?: payment_service_statistics_200_responseResolvers<ContextType>;
  query_payment_service_statistics_oneOf_0_statistics_items?: query_payment_service_statistics_oneOf_0_statistics_itemsResolvers<ContextType>;
  payment_service_statistics_400_response?: payment_service_statistics_400_responseResolvers<ContextType>;
  post_login_200_response?: post_login_200_responseResolvers<ContextType>;
  post_register_201_response?: post_register_201_responseResolvers<ContextType>;
  post_manager_register_201_response?: post_manager_register_201_responseResolvers<ContextType>;
  post_logout_200_response?: post_logout_200_responseResolvers<ContextType>;
  post_register_google_201_response?: post_register_google_201_responseResolvers<ContextType>;
  post_login_google_200_response?: post_login_google_200_responseResolvers<ContextType>;
  post_enable_2fa_200_response?: post_enable_2fa_200_responseResolvers<ContextType>;
  post_verify_2fa_200_response?: post_verify_2fa_200_responseResolvers<ContextType>;
  put_user_by_id_200_response?: put_user_by_id_200_responseResolvers<ContextType>;
  delete_user_by_id_200_response?: delete_user_by_id_200_responseResolvers<ContextType>;
  post_user_reset_password_request_200_response?: post_user_reset_password_request_200_responseResolvers<ContextType>;
  post_user_reset_password_200_response?: post_user_reset_password_200_responseResolvers<ContextType>;
  post_site_201_response?: post_site_201_responseResolvers<ContextType>;
  put_site_200_response?: put_site_200_responseResolvers<ContextType>;
  delete_site_200_response?: delete_site_200_responseResolvers<ContextType>;
  post_appointment_201_response?: post_appointment_201_responseResolvers<ContextType>;
  put_appointment_200_response?: put_appointment_200_responseResolvers<ContextType>;
  delete_appointment_200_response?: delete_appointment_200_responseResolvers<ContextType>;
  post_service_201_response?: post_service_201_responseResolvers<ContextType>;
  post_worker_201_response?: post_worker_201_responseResolvers<ContextType>;
  put_worker_200_response?: put_worker_200_responseResolvers<ContextType>;
  delete_worker_200_response?: delete_worker_200_responseResolvers<ContextType>;
  put_subscription_by_id_response?: put_subscription_by_id_responseResolvers<ContextType>;
  put_subscription_by_id_200_response?: put_subscription_by_id_200_responseResolvers<ContextType>;
  mutation_put_subscription_by_id_oneOf_0_manager?: mutation_put_subscription_by_id_oneOf_0_managerResolvers<ContextType>;
  put_subscription_by_id_400_response?: put_subscription_by_id_400_responseResolvers<ContextType>;
  put_subscription_by_id_404_response?: put_subscription_by_id_404_responseResolvers<ContextType>;
  put_subscription_by_id_500_response?: put_subscription_by_id_500_responseResolvers<ContextType>;
  post_notification_response?: post_notification_responseResolvers<ContextType>;
  JSON_container?: JSON_containerResolvers<ContextType>;
  post_notification_404_response?: post_notification_404_responseResolvers<ContextType>;
  post_notification_500_response?: post_notification_500_responseResolvers<ContextType>;
  put_notification_response?: put_notification_responseResolvers<ContextType>;
  put_notification_400_response?: put_notification_400_responseResolvers<ContextType>;
  put_notification_404_response?: put_notification_404_responseResolvers<ContextType>;
  put_notification_500_response?: put_notification_500_responseResolvers<ContextType>;
  delete_notification_response?: delete_notification_responseResolvers<ContextType>;
  delete_notification_200_response?: delete_notification_200_responseResolvers<ContextType>;
  delete_notification_400_response?: delete_notification_400_responseResolvers<ContextType>;
  delete_notification_404_response?: delete_notification_404_responseResolvers<ContextType>;
  delete_notification_500_response?: delete_notification_500_responseResolvers<ContextType>;
  post_payment_response?: post_payment_responseResolvers<ContextType>;
  post_payment_404_response?: post_payment_404_responseResolvers<ContextType>;
  post_payment_500_response?: post_payment_500_responseResolvers<ContextType>;
  put_payment_response?: put_payment_responseResolvers<ContextType>;
  put_payment_400_response?: put_payment_400_responseResolvers<ContextType>;
  put_payment_404_response?: put_payment_404_responseResolvers<ContextType>;
  put_payment_500_response?: put_payment_500_responseResolvers<ContextType>;
  delete_payment_response?: delete_payment_responseResolvers<ContextType>;
  delete_payment_200_response?: delete_payment_200_responseResolvers<ContextType>;
  delete_payment_400_response?: delete_payment_400_responseResolvers<ContextType>;
  delete_payment_404_response?: delete_payment_404_responseResolvers<ContextType>;
  delete_payment_500_response?: delete_payment_500_responseResolvers<ContextType>;
  URL?: GraphQLScalarType;
  Time?: GraphQLScalarType;
  post_send_response?: post_send_responseResolvers<ContextType>;
  ChatResponse?: ChatResponseResolvers<ContextType>;
  post_send_400_response?: post_send_400_responseResolvers<ContextType>;
  post_send_500_response?: post_send_500_responseResolvers<ContextType>;
}>;

export type DirectiveResolvers<ContextType = MeshContext> = ResolversObject<{
  statusCodeTypeName?: statusCodeTypeNameDirectiveResolver<any, any, ContextType>;
  httpOperation?: httpOperationDirectiveResolver<any, any, ContextType>;
  transport?: transportDirectiveResolver<any, any, ContextType>;
  resolveRoot?: resolveRootDirectiveResolver<any, any, ContextType>;
}>;

export type MeshContext = FsMsAuTypes.Context & FsMsLcTypes.Context & FsMsCbTypes.Context & BaseMeshContext;


const baseDir = pathModule.join(typeof __dirname === 'string' ? __dirname : '/', '..');

const importFn: ImportFn = <T>(moduleId: string) => {
  const relativeModuleId = (pathModule.isAbsolute(moduleId) ? pathModule.relative(baseDir, moduleId) : moduleId).split('\\').join('/').replace(baseDir + '/', '');
  switch(relativeModuleId) {
    case ".mesh/sources/fs_ms_lc/schemaWithAnnotations":
      return import("./sources/fs_ms_lc/schemaWithAnnotations") as T;
    
    case ".mesh/sources/fs_ms_cb/schemaWithAnnotations":
      return import("./sources/fs_ms_cb/schemaWithAnnotations") as T;
    
    case ".mesh/sources/fs_ms_au/schemaWithAnnotations":
      return import("./sources/fs_ms_au/schemaWithAnnotations") as T;
    
    default:
      return Promise.reject(new Error(`Cannot find module '${relativeModuleId}'.`));
  }
};

const rootStore = new MeshStore('.mesh', new FsStoreStorageAdapter({
  cwd: baseDir,
  importFn,
  fileType: "ts",
}), {
  readonly: true,
  validate: false
});

export const rawServeConfig: YamlConfig.Config['serve'] = undefined as any
export async function getMeshOptions(): Promise<GetMeshOptions> {
const pubsub = new PubSub();
const sourcesStore = rootStore.child('sources');
const logger = new DefaultLogger("");
const MeshCache = await import("@graphql-mesh/cache-localforage").then(handleImport);
  const cache = new MeshCache({
      ...{},
      importFn,
      store: rootStore.child('cache'),
      pubsub,
      logger,
    })
const fetchFn = await import('@whatwg-node/fetch').then(m => m?.fetch || m);
const sources: MeshResolvedSource[] = [];
const transforms: MeshTransform[] = [];
const additionalEnvelopPlugins: MeshPlugin<any>[] = [];
const fsMsAuTransforms = [];
const fsMsLcTransforms = [];
const fsMsCbTransforms = [];
const additionalTypeDefs = [] as any[];
const FsMsAuHandler = await import("@graphql-mesh/openapi").then(handleImport);
const fsMsAuHandler = new FsMsAuHandler({
              name: "fs_ms_au",
              config: {"source":"./openapi-schemas/openapi-auth.yaml","baseUrl":"http://fullstyle-local-orchestration-fs_ms_au:5000/"},
              baseDir,
              cache,
              pubsub,
              store: sourcesStore.child("fs_ms_au"),
              logger: logger.child({ source: "fs_ms_au" }),
              importFn,
            });
const FsMsLcHandler = await import("@graphql-mesh/openapi").then(handleImport);
const fsMsLcHandler = new FsMsLcHandler({
              name: "fs_ms_lc",
              config: {"source":"./openapi-schemas/openapi-logic.yaml","baseUrl":"http://fullstyle-local-orchestration-fs_ms_lc:5000/api/"},
              baseDir,
              cache,
              pubsub,
              store: sourcesStore.child("fs_ms_lc"),
              logger: logger.child({ source: "fs_ms_lc" }),
              importFn,
            });
const FsMsCbHandler = await import("@graphql-mesh/openapi").then(handleImport);
const fsMsCbHandler = new FsMsCbHandler({
              name: "fs_ms_cb",
              config: {"source":"./openapi-schemas/openapi-chatbot.yaml","baseUrl":"http://fullstyle-local-orchestration-fs_ms_cb:8080/api/v1/"},
              baseDir,
              cache,
              pubsub,
              store: sourcesStore.child("fs_ms_cb"),
              logger: logger.child({ source: "fs_ms_cb" }),
              importFn,
            });
sources[0] = {
          name: 'fs_ms_au',
          handler: fsMsAuHandler,
          transforms: fsMsAuTransforms
        }
sources[1] = {
          name: 'fs_ms_lc',
          handler: fsMsLcHandler,
          transforms: fsMsLcTransforms
        }
sources[2] = {
          name: 'fs_ms_cb',
          handler: fsMsCbHandler,
          transforms: fsMsCbTransforms
        }
const additionalResolvers = [] as any[]
const Merger = await import("@graphql-mesh/merger-stitching").then(handleImport);
const merger = new Merger({
        cache,
        pubsub,
        logger: logger.child({ merger: "stitching" }),
        store: rootStore.child("stitching")
      })

  return {
    sources,
    transforms,
    additionalTypeDefs,
    additionalResolvers,
    cache,
    pubsub,
    merger,
    logger,
    additionalEnvelopPlugins,
    get documents() {
      return [
      
    ];
    },
    fetchFn,
  };
}

export function createBuiltMeshHTTPHandler<TServerContext = {}>(): MeshHTTPHandler<TServerContext> {
  return createMeshHTTPHandler<TServerContext>({
    baseDir,
    getBuiltMesh: getBuiltMesh,
    rawServeConfig: undefined,
  })
}


let meshInstance$: Promise<MeshInstance> | undefined;

export const pollingInterval = null;

export function getBuiltMesh(): Promise<MeshInstance> {
  if (meshInstance$ == null) {
    if (pollingInterval) {
      setInterval(() => {
        getMeshOptions()
        .then(meshOptions => getMesh(meshOptions))
        .then(newMesh =>
          meshInstance$.then(oldMesh => {
            oldMesh.destroy()
            meshInstance$ = Promise.resolve(newMesh)
          })
        ).catch(err => {
          console.error("Mesh polling failed so the existing version will be used:", err);
        });
      }, pollingInterval)
    }
    meshInstance$ = getMeshOptions().then(meshOptions => getMesh(meshOptions)).then(mesh => {
      const id = mesh.pubsub.subscribe('destroy', () => {
        meshInstance$ = undefined;
        mesh.pubsub.unsubscribe(id);
      });
      return mesh;
    });
  }
  return meshInstance$;
}

export const execute: ExecuteMeshFn = (...args) => getBuiltMesh().then(({ execute }) => execute(...args));

export const subscribe: SubscribeMeshFn = (...args) => getBuiltMesh().then(({ subscribe }) => subscribe(...args));