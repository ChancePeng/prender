import type { IConfig, MiddlewareImplements } from '@/render';
import type { FunctionComponent } from 'react';
import type { Options } from '../render/types';
export interface IRuntimeContext<T = never, P = any, K = never> {
  data?: any;
  configs?: IConfig<T, P, K>[];
  middlewares?: MiddlewareImplements[];
  config: IConfig<T, P, K> | null;
  pfcs?: Record<string, FunctionComponent>;
  options?: Options;
}
