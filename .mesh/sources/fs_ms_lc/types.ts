// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace FsMsLcTypes {
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
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: { input: Date | string; output: Date | string; }
  /** Represents date values */
  Date: { input: string; output: string; }
  /** A field whose value conforms to the standard internet email address format as specified in HTML Spec: https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address. */
  EmailAddress: { input: string; output: string; }
  /** A field whose value conforms to the standard URL format as specified in RFC3986: https://www.ietf.org/rfc/rfc3986.txt. */
  URL: { input: URL | string; output: URL | string; }
  /** A time string at UTC, such as 10:15:30Z, compliant with the `full-time` format outlined in section 5.6 of the RFC 3339profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Time: { input: Date | string; output: Date | string; }
  ObjMap: { input: any; output: any; }
};

export type Query = {
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

export type Mutation = {
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
      /** Obtiene la información de un usuario específico **/
  user_by_id: InContextSdkMethod<Query['user_by_id'], Queryuser_by_idArgs, MeshContext>,
  /** Obtiene la lista de sitios filtrados por los parámetros proporcionados **/
  site: InContextSdkMethod<Query['site'], QuerysiteArgs, MeshContext>,
  /** Obtiene la lista de las categorías por sitio **/
  site_has_category: InContextSdkMethod<Query['site_has_category'], {}, MeshContext>,
  /** Obtiene la lista de citas filtradas por los parámetros proporcionados **/
  appointment: InContextSdkMethod<Query['appointment'], QueryappointmentArgs, MeshContext>,
  /** Obtiene detalles adicionales de las citas **/
  appointmentdetail: InContextSdkMethod<Query['appointmentdetail'], QueryappointmentdetailArgs, MeshContext>,
  /** Obtiene estadísticas de citas agrupadas por trabajador **/
  appointment_worker_statistics: InContextSdkMethod<Query['appointment_worker_statistics'], Queryappointment_worker_statisticsArgs, MeshContext>,
  /** Obtiene estadísticas de citas agrupadas por sitio **/
  appointment_site_statistics: InContextSdkMethod<Query['appointment_site_statistics'], Queryappointment_site_statisticsArgs, MeshContext>,
  /** Obtiene estadísticas de citas agrupadas por servicio **/
  appointment_service_statistics: InContextSdkMethod<Query['appointment_service_statistics'], Queryappointment_service_statisticsArgs, MeshContext>,
  /** Obtiene la lista de servicios filtrados por los parámetros proporcionados **/
  service: InContextSdkMethod<Query['service'], QueryserviceArgs, MeshContext>,
  /** Obtiene la lista de todas las categorías **/
  category: InContextSdkMethod<Query['category'], {}, MeshContext>,
  /** Obtiene la lista de trabajadores filtrados por los parámetros proporcionados **/
  worker: InContextSdkMethod<Query['worker'], QueryworkerArgs, MeshContext>,
  /** Obtiene el horario semanal de un trabajador específico **/
  worker_weekly_schedule: InContextSdkMethod<Query['worker_weekly_schedule'], Queryworker_weekly_scheduleArgs, MeshContext>,
  /** Obtiene el horario diario de un trabajador específico **/
  worker_daily_schedule: InContextSdkMethod<Query['worker_daily_schedule'], Queryworker_daily_scheduleArgs, MeshContext>,
  /** Obtiene la lista de los servicios por trabajador **/
  worker_has_service: InContextSdkMethod<Query['worker_has_service'], {}, MeshContext>,
  /** Obtiene la información de suscripción de un administrador **/
  subscription_by_id: InContextSdkMethod<subscription_by_id_200_response | subscription_by_id_404_response, Querysubscription_by_idArgs, MeshContext>,
  /** Obtiene la lista de notificaciones filtradas por los parámetros proporcionados **/
  notification: InContextSdkMethod<[query_notification_oneOf_0_items | notification_404_response], QuerynotificationArgs, MeshContext>,
  /** Obtiene la lista de pagos filtrados por los parámetros proporcionados **/
  payment: InContextSdkMethod<[query_payment_oneOf_0_items | payment_404_response], QuerypaymentArgs, MeshContext>,
  /** Obtiene estadísticas de pagos agrupadas por trabajador **/
  payment_worker_statistics: InContextSdkMethod<payment_worker_statistics_200_response | payment_worker_statistics_400_response, Querypayment_worker_statisticsArgs, MeshContext>,
  /** Obtiene estadísticas de pagos agrupadas por sitio **/
  payment_site_statistics: InContextSdkMethod<payment_site_statistics_200_response | payment_site_statistics_400_response, Querypayment_site_statisticsArgs, MeshContext>,
  /** Obtiene estadísticas de pagos agrupadas por servicio **/
  payment_service_statistics: InContextSdkMethod<payment_service_statistics_200_response | payment_service_statistics_400_response, Querypayment_service_statisticsArgs, MeshContext>,
  /** Obtiene los detalles de servicios filtrados por los parámetros proporcionados **/
  detail: InContextSdkMethod<Query['detail'], QuerydetailArgs, MeshContext>,
  /** Obtiene la disponibilidad filtrada por los parámetros proporcionados **/
  availability: InContextSdkMethod<Query['availability'], QueryavailabilityArgs, MeshContext>,
  /** Obtiene los días libres filtrados por los parámetros proporcionados **/
  days_off: InContextSdkMethod<Query['days_off'], Querydays_offArgs, MeshContext>
  };

  export type MutationSdk = {
      /** Permite a un usuario iniciar sesión **/
  post_login: InContextSdkMethod<Mutation['post_login'], Mutationpost_loginArgs, MeshContext>,
  /** Permite registrar un nuevo usuario en el sistema **/
  post_register: InContextSdkMethod<Mutation['post_register'], Mutationpost_registerArgs, MeshContext>,
  /** Permite registrar un nuevo administrador en el sistema **/
  post_manager_register: InContextSdkMethod<Mutation['post_manager_register'], Mutationpost_manager_registerArgs, MeshContext>,
  /** Permite a un usuario cerrar sesión en el sistema **/
  post_logout: InContextSdkMethod<Mutation['post_logout'], {}, MeshContext>,
  /** Permite registrar un nuevo usuario utilizando la cuenta de Google **/
  post_register_google: InContextSdkMethod<Mutation['post_register_google'], Mutationpost_register_googleArgs, MeshContext>,
  /** Permite iniciar sesión utilizando la cuenta de Google **/
  post_login_google: InContextSdkMethod<Mutation['post_login_google'], Mutationpost_login_googleArgs, MeshContext>,
  /** Permite habilitar la autenticación de dos factores para un usuario **/
  post_enable_2fa: InContextSdkMethod<Mutation['post_enable_2fa'], {}, MeshContext>,
  /** Permite verificar un código de autenticación de dos factores **/
  post_verify_2fa: InContextSdkMethod<Mutation['post_verify_2fa'], Mutationpost_verify_2faArgs, MeshContext>,
  /** Actualiza la información de un usuario específico **/
  put_user_by_id: InContextSdkMethod<Mutation['put_user_by_id'], Mutationput_user_by_idArgs, MeshContext>,
  /** Elimina a un usuario específico **/
  delete_user_by_id: InContextSdkMethod<Mutation['delete_user_by_id'], Mutationdelete_user_by_idArgs, MeshContext>,
  /** Envía un correo electrónico con un enlace para restablecer la contraseña **/
  post_user_reset_password_request: InContextSdkMethod<Mutation['post_user_reset_password_request'], Mutationpost_user_reset_password_requestArgs, MeshContext>,
  /** Restablece la contraseña del usuario utilizando el token proporcionado **/
  post_user_reset_password: InContextSdkMethod<Mutation['post_user_reset_password'], Mutationpost_user_reset_passwordArgs, MeshContext>,
  /** Crea un nuevo sitio **/
  post_site: InContextSdkMethod<Mutation['post_site'], Mutationpost_siteArgs, MeshContext>,
  /** Actualiza la información de un sitio existente **/
  put_site: InContextSdkMethod<Mutation['put_site'], Mutationput_siteArgs, MeshContext>,
  /** Elimina un sitio existente **/
  delete_site: InContextSdkMethod<Mutation['delete_site'], Mutationdelete_siteArgs, MeshContext>,
  /** Obtiene la lista de las categorías por sitio **/
  post_site_has_category: InContextSdkMethod<Mutation['post_site_has_category'], Mutationpost_site_has_categoryArgs, MeshContext>,
  /** Crea una nueva cita **/
  post_appointment: InContextSdkMethod<Mutation['post_appointment'], Mutationpost_appointmentArgs, MeshContext>,
  /** Actualiza la información de una cita existente **/
  put_appointment: InContextSdkMethod<Mutation['put_appointment'], Mutationput_appointmentArgs, MeshContext>,
  /** Elimina una cita existente **/
  delete_appointment: InContextSdkMethod<Mutation['delete_appointment'], Mutationdelete_appointmentArgs, MeshContext>,
  /** Crea un nuevo servicio **/
  post_service: InContextSdkMethod<Mutation['post_service'], Mutationpost_serviceArgs, MeshContext>,
  /** Crea un nuevo trabajador **/
  post_worker: InContextSdkMethod<Mutation['post_worker'], Mutationpost_workerArgs, MeshContext>,
  /** Actualiza la información de un trabajador existente **/
  put_worker: InContextSdkMethod<Mutation['put_worker'], Mutationput_workerArgs, MeshContext>,
  /** Elimina un trabajador existente **/
  delete_worker: InContextSdkMethod<Mutation['delete_worker'], Mutationdelete_workerArgs, MeshContext>,
  /** Modifica los servicios por trabajador **/
  post_worker_has_service: InContextSdkMethod<Mutation['post_worker_has_service'], Mutationpost_worker_has_serviceArgs, MeshContext>,
  /** Actualiza la suscripción de un administrador **/
  put_subscription_by_id: InContextSdkMethod<put_subscription_by_id_200_response | put_subscription_by_id_400_response | put_subscription_by_id_404_response | put_subscription_by_id_500_response, Mutationput_subscription_by_idArgs, MeshContext>,
  /** Crea una nueva notificación **/
  post_notification: InContextSdkMethod<JSON_container | post_notification_404_response | post_notification_500_response, Mutationpost_notificationArgs, MeshContext>,
  /** Actualiza una notificación existente **/
  put_notification: InContextSdkMethod<JSON_container | put_notification_400_response | put_notification_404_response | put_notification_500_response, Mutationput_notificationArgs, MeshContext>,
  /** Elimina una notificación existente **/
  delete_notification: InContextSdkMethod<delete_notification_200_response | delete_notification_400_response | delete_notification_404_response | delete_notification_500_response, Mutationdelete_notificationArgs, MeshContext>,
  /** Crea un nuevo pago **/
  post_payment: InContextSdkMethod<JSON_container | post_payment_404_response | post_payment_500_response, Mutationpost_paymentArgs, MeshContext>,
  /** Actualiza un pago existente **/
  put_payment: InContextSdkMethod<JSON_container | put_payment_400_response | put_payment_404_response | put_payment_500_response, Mutationput_paymentArgs, MeshContext>,
  /** Elimina un pago existente **/
  delete_payment: InContextSdkMethod<delete_payment_200_response | delete_payment_400_response | delete_payment_404_response | delete_payment_500_response, Mutationdelete_paymentArgs, MeshContext>,
  /** Crea un nuevo servicio **/
  post_detail: InContextSdkMethod<Mutation['post_detail'], Mutationpost_detailArgs, MeshContext>,
  /** Actualiza una disponibilidad existente **/
  put_detail: InContextSdkMethod<Mutation['put_detail'], Mutationput_detailArgs, MeshContext>,
  /** Elimina una disponibilidad existente **/
  delete_detail: InContextSdkMethod<Mutation['delete_detail'], Mutationdelete_detailArgs, MeshContext>,
  /** Crea una nueva disponibilidad **/
  post_availability: InContextSdkMethod<Mutation['post_availability'], Mutationpost_availabilityArgs, MeshContext>,
  /** Actualiza una disponibilidad existente **/
  put_availability: InContextSdkMethod<Mutation['put_availability'], Mutationput_availabilityArgs, MeshContext>,
  /** Elimina una disponibilidad existente **/
  delete_availability: InContextSdkMethod<Mutation['delete_availability'], Mutationdelete_availabilityArgs, MeshContext>,
  /** Crea un nuevo día libre **/
  post_days_off: InContextSdkMethod<Mutation['post_days_off'], Mutationpost_days_offArgs, MeshContext>,
  /** Actualiza los días libres filtrados por los parámetros proporcionados **/
  put_days_off: InContextSdkMethod<Mutation['put_days_off'], Mutationput_days_offArgs, MeshContext>,
  /** Elimina un día libre existente **/
  delete_days_off: InContextSdkMethod<Mutation['delete_days_off'], Mutationdelete_days_offArgs, MeshContext>
  };

  export type SubscriptionSdk = {
    
  };

  export type Context = {
      ["fs_ms_lc"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
