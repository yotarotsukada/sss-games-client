import {
  DefaultBodyType,
  ResponseResolver,
  RestContext,
  RestRequest,
} from 'msw';

export type ResolverFunc<
  TArgs extends DefaultBodyType,
  TParams extends Record<string, any>,
  TReturns extends DefaultBodyType
> = ResponseResolver<
  RestRequest<TArgs, TParams>,
  RestContext,
  TReturns | Error
>;
